import React from 'react';
import s from '../Resume.module.scss';
import gql from 'graphql-tag';

type Contact = {
  phoneNum: string;
  address: string;
};

const ContactFragment = gql`
  fragment ContactFragment on Resume {
    address
    phoneNum
  }
`;

const Contact = (contact: any): JSX.Element => {
  contact = contact.data?.resume as Contact;
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
