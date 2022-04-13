import React from 'react';
import s from '../Resume.module.scss';
import { gql } from 'urql';

export const ContactFragment = gql`
  fragment ContactFragment on Resume {
    Address
    Phone
  }
`;

const Contact = (contact): JSX.Element => {
  return (
    <div className={s.contactInfo}>
      <p className={s.cellphone}>{contact.phoneNum}</p>
      <p className={s.address}>{contact.address}</p>
    </div>
  );
};

Contact.displayName = 'Contact Info';

Contact.fragments = {
  ContactFragment: ContactFragment,
};

export default Contact;
