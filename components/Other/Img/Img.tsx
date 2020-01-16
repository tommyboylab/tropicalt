interface Img {
	class:string;
	url:string;
	alt:string;
	placeholder:string;
}
export default (Img:Img) => (
	<img
		className={Img.class}
		src={`https://api.tropicalt.ca${Img.url}`}
		alt={Img.alt}
		style={{
			backgroundImage: `url(https://api.tropicalt.ca/${Img.placeholder})`,
			backgroundPosition: 'center',
			backgroundSize: 'cover',
			backgroundRepeat: 'no-repeat',
		}}
	/>
);
