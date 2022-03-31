import React from 'react';
import s from '../Resume.module.scss';
import { gql } from '@app/gql';
import { ContactFragmentFragment } from '../../../apollo/gql/graphql';

const ContactFragment = gql(`
  fragment ContactFragment on Resume {
    address
    phoneNum
  }
`);

const Contact = (contact: ContactFragmentFragment): JSX.Element => {
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
