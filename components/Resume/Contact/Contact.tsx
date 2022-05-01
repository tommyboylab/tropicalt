import React from 'react';
import s from '../Resume.module.scss';
import { gql } from 'urql';

export const ContactFragment = gql`
  fragment ContactFragment on Resume {
    Address
    Phone
  }
`;

type ContactType = {
  phoneNum: string;
  address: string;
};

const Contact = ({ phoneNum, address }: ContactType): JSX.Element => {
  return (
    <div className={s.contactInfo}>
      <p className={s.cellphone}>{phoneNum}</p>
      <p className={s.address}>{address}</p>
    </div>
  );
};

Contact.displayName = 'Contact Info';

Contact.fragments = {
  ContactFragment: ContactFragment,
};

export default Contact;
