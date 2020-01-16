const s = require('./Tags.scss');
interface Tags {
	tag:string[];
}
export default (Tags:Tags) => (
	<ul className={s.postTags}>
		<li>Tags:</li>
		<li>
			<a href='/'>{Tags.tag}</a>
		</li>
	</ul>
);
