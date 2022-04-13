import React, { MouseEventHandler } from 'react';
import * as yup from 'yup';
import { gql } from 'urql';
import { useMutation } from 'urql';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { ToggleContent, Modal } from './Modal/Modal';
import s from './Contact.module.scss';

type FormFields = {
  name: string;
  email: string;
  message: string;
};

const sendEmail = gql`
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

const contactSchema = yup.object({
  name: yup.string().min(2, `That's not a name!`).max(22).required(),
  email: yup.string().email(`That's not a real email!`).min(6, `That's not a real email!`).required(),
  message: yup.string().min(2, 'What kind of message is that?').max(500).required(),
});

const HideModal = (hide: MouseEventHandler): JSX.Element => (
  <Modal>
    <h2>Thanks for reaching out</h2>
    <p>{`I'll get back to you shortly.`}</p>
    <button onClick={hide}>Close</button>
  </Modal>
);

const Form = (): JSX.Element => {
  const [addEmail, { loading: mutationLoading, error: mutationError }] = useMutation(sendEmail);
  const {
    register,
    handleSubmit,
    formState,
    reset,
    formState: { errors },
  } = useForm<FormFields>({
    mode: 'onChange',
    resolver: yupResolver(contactSchema),
  });

  const onSubmit = async (data: FormFields): Promise<void> => {
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
    <section className={s.form}>
      <form onSubmit={void handleSubmit(onSubmit)}>
        <h1>Want to get in touch?</h1>

        <div className={s.name}>
          <input
            type='text'
            {...register('name', { required: true })}
            placeholder='Your Name'
            maxLength={22}
            minLength={2}
          />
          {errors.name && <p className={s.error}>{errors.name.message}</p>}
        </div>

        <div className={s.email}>
          <input type='email' {...register('email', { required: true })} placeholder='Your email' minLength={6} />
          {errors.email && <p className={s.error}>{errors.email.message}</p>}
        </div>

        <div className={s.message}>
          <textarea
            {...register('message', { required: true })}
            placeholder='Your message'
            maxLength={500}
            minLength={2}
          />
          {errors.message && <p className={s.error}>{errors.message.message}</p>}
        </div>

        <ToggleContent
          toggle={(show: MouseEventHandler): JSX.Element => (
            <button
              type='submit'
              className={s.submit}
              onClick={(event) => {
                handleSubmit(onSubmit);
                show(event);
              }}
              disabled={!!mutationError || !formState.isValid || (errors && mutationLoading)}>
              Submit
            </button>
          )}
          content={HideModal}
        />
        {mutationError && <p className={s.submitError}>Error :( Please try again</p>}
      </form>
    </section>
  );
};

Form.displayName = 'Contact Form';

export default Form;
