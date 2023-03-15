/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		spacing: {
			'3xs': 'clamp(0.25rem, calc(0.23rem + 0.1vw), 0.31rem)',
			'2xs': 'clamp(0.5rem, calc(0.48rem + 0.1vw), 0.56rem)',
			xs: 'clamp(0.75rem, calc(0.71rem + 0.21vw), 0.88rem)',
			sm: 'clamp(1rem, calc(0.96rem + 0.21vw), 1.13rem)',
			md: 'clamp(1.5rem, calc(1.45rem + 0.31vw), 1.69rem)',
			lg: 'clamp(2rem, calc(1.93rem + 0.42vw), 2.25rem)',
			xl: 'clamp(3rem, calc(2.89rem + 0.63vw), 3.38rem)',
			'2xl': 'clamp(4rem, calc(3.85rem + 0.83vw), 4.5rem)',
			'3xl': 'clamp(6rem, calc(5.78rem + 1.25vw), 6.75rem)'
		}
	},
	plugins: [],
	prefix: 'tw-'
}
