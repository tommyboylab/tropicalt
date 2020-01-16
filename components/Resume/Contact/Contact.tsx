const s = require('../Resume.scss');

interface Contact {
	phone: string;
	address: string;
}
export default (Contact: Contact) => (
	<div className={s.contactInfo}>
		<p className={s.cellphone}>{Contact.phone}</p>
		<p className={s.address}>{Contact.address}</p>
	</div>
);
