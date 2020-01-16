const s = require('../Resume.scss');

interface Footer {
	email: string;
}
export default (Footer: Footer) => (
	<div className={s.contact}>
		<p>
			Contact Information:
			<a href={`mailto:${Footer.email}`}>Email</a>
		</p>
	</div>
);
