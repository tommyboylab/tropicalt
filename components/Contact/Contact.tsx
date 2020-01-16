import React from 'react';
import gql from 'graphql-tag';
import { useMutation } from '@apollo/react-hooks';
import { useForm } from 'react-hook-form';
import * as Yup from 'yup';
import { ToggleContent, Modal } from './Modal/Modal';
const s = require('./Contact.scss');

interface FormFields {
	name: string;
	email: string;
	message: string;
}

const ADD_EMAIL = gql`
	mutation AddEmail($name: String!, $email: String!, $message: String!) {
		createEmail(input: { data: { name: $name, email: $email, message: $message } }) {
			email {
				id
				name
				email
				message
			}
		}
	}
`;

const contactSchema = Yup.object().shape({
	name: Yup.string()
		.min(2, 'Too Short!')
		.max(22, 'Too Long!')
		.required(),
	email: Yup.string()
		.email('Invalid email')
		.required(),
	message: Yup.string()
		.min(2, 'Too Short!')
		.max(500, 'Too Long!')
		.required(),
});

export default function Form() {
	const [addEmail, { loading: mutationLoading, error: mutationError }] = useMutation(ADD_EMAIL);
	const { register, errors, handleSubmit, formState, reset } = useForm<FormFields>({
		mode: 'onChange',
		validationSchema: contactSchema,
	});
	const onSubmit = async (data: { name: string; email: string; message: string }) => {
		await addEmail({
			variables: { name: data.name, email: data.email, message: data.message },
		});
		reset({
			name: '',
			email: '',
			message: '',
		});
	};
	return (
		<>
			<section className={s.form}>
				<form onSubmit={handleSubmit(onSubmit)}>
					<h1>Looking to get in touch?</h1>
					<div className={s.name}>
						<input
							type='text'
							placeholder='Your Name'
							name='name'
							ref={register}
							maxLength={22}
							minLength={2}
							required={true}
						/>
						{errors.name && <p className={s.error}>{errors.name.message}</p>}
					</div>
					<div className={s.email}>
						<input type='email' placeholder='Your email' name='email' ref={register} minLength={6} required={true} />
						{errors.email && <p className={s.error}>{errors.email.message}</p>}
					</div>
					<div className={s.message}>
						<textarea
							placeholder='Your message'
							name='message'
							ref={register}
							maxLength={500}
							minLength={2}
							required={true}
						/>
						{errors.message && <p className={s.error}>{errors.message.message}</p>}
					</div>
					<ToggleContent
						toggle={(show: any) => (
							<button
								type='submit'
								className={s.submit}
								onClick={!mutationError || (handleSubmit(onSubmit) && show)}
								disabled={!formState.isValid || (errors && mutationLoading)}>
								Submit
							</button>
						)}
						content={(hide: any) => (
							<Modal>
								<h2>Thanks for reaching out</h2>
								<p>I'll get back to you shortly.</p>
								<button onClick={hide}>Close</button>
							</Modal>
						)}
					/>
					{mutationError && <p className={s.submitError}>Error :( Please try again</p>}
				</form>
			</section>
		</>
	);
}
