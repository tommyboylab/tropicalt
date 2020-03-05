/// <reference types="next" />
/// <reference types="next/types/global" />

declare module '*.scss' {
	const s: { [className: string]: string };
	export default s;
}
