/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		fontFamily: {
			sans: ['"Rubik"', 'sans-serif'],
		},
		extend: {},
	},
	plugins: [
		require('@tailwindcss/forms')
	],
}
