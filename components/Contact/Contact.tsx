import React, { MouseEventHandler } from 'react';
import { object, string } from 'yup';
import gql from 'graphql-tag';
import { useMutation } from '@apollo/react-hooks';
import { useForm } from 'react-hook-form';
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

const contactSchema = object().shape({
  name: string().min(2, `That's not a name!`).max(22).required(),
  email: string().email(`That's not a real email!`).min(6, `That's not a real email!`).required(),
  message: string().min(2, 'What kind of message is that?').max(500).required(),
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
  const { register, errors, handleSubmit, formState, reset } = useForm<FormFields>({
    mode: 'onChange',
    validationSchema: contactSchema,
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
      <form onSubmit={handleSubmit(onSubmit)}>
        <h1>Want to get in touch?</h1>

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
