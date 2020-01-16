const s = require('../AboutCards.scss');
interface Text {
	title:string;
	excerpt:string;
}
export default (Text:Text) => (
	<div className={s.aboutCardText}>
		<h2>{Text.title}</h2>
		<p>{Text.excerpt}</p>
	</div>
);
