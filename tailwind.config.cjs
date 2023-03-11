/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		fontFamily: {
			sans: ['gsans', ...defaultTheme.fontFamily.sans],
			serif: ['boska', ...defaultTheme.fontFamily.serif]
		},
		fontSize: {
			xs: 'clamp(0.69rem, calc(0.66rem + 0.18vw), 0.80rem)',
			sm: 'clamp(0.83rem, calc(0.78rem + 0.28vw), 1.00rem)',
			base: 'clamp(1.00rem, calc(0.93rem + 0.42vw), 1.25rem)',
			md: 'clamp(1.20rem, calc(1.09rem + 0.60vw), 1.56rem)',
			lg: 'clamp(1.44rem, calc(1.29rem + 0.86vw), 1.95rem)',
			xl: 'clamp(1.73rem, calc(1.52rem + 1.19vw), 2.44rem)',
			'2xl': 'clamp(2.07rem, calc(1.79rem + 1.63vw), 3.05rem)',
			'3xl': 'clamp(2.49rem, calc(2.10rem + 2.21vw), 3.82rem)'
		},
		spacing: {
			'1': 'clamp(0.25rem, calc(0.23rem + 0.10vw), 0.31rem)',
			'2': 'clamp(0.50rem, calc(0.46rem + 0.21vw), 0.63rem)',
			'3': 'clamp(0.75rem, calc(0.70rem + 0.31vw), 0.94rem)',
			'4': 'clamp(1.00rem, calc(0.93rem + 0.42vw), 1.25rem)',
			'5': 'clamp(1.50rem, calc(1.39rem + 0.63vw), 1.88rem)',
			'6': 'clamp(2.00rem, calc(1.85rem + 0.83vw), 2.50rem)',
			'7': 'clamp(3.00rem, calc(2.78rem + 1.25vw), 3.75rem)',
			'8': 'clamp(4.00rem, calc(3.71rem + 1.67vw), 5.00rem)',
			'9':'clamp(6.00rem, calc(5.56rem + 2.50vw), 7.50rem)'
		}
	},
	plugins: []
}
