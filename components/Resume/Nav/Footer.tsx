const s = require('../Resume.scss');

export default footer => (
    <div className={s.contact}>
        <p>
            Contact Information:
            <a href={`mailto:${footer.emailAdd}`}>Email</a>
        </p>
    </div>
);
