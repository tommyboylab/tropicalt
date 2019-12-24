const s = require('../Resume.scss');

export default contact => (
    <div className={s.contactInfo}>
        <p className={s.cellphone}>{contact.phone}</p>
        <p className={s.address}>{contact.address}</p>
    </div>
);
