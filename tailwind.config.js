/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			screens: {
				xs: '390px',
			},
			typography: {
				DEFAULT: {
					css: {
						'*': {
							margin: 0,
						},
						width: '100%',
						display: 'flex',
						flexDirection: 'column',
						rowGap: '16px',
						ol: {
							color: '#737373',
						},
						'li::marker': {
							color: '#737373',
						},
						ul: {
							color: '#737373',
						},
						p: {
							color: '#737373',
						},
						u: {
							color: '#737373',
						},
						b: {
							color: '#737373',
						},
						h1: {
							color: '#171717',
							fontSize: '36px',
							fontWeight: 'bold',
						},
						h2: {
							color: '#171717',
							fontSize: '24px',
						},
						h3: {
							color: '#171717',
							fontSize: '20px',
						},
						img: {
							width: '100%',
							height: 'auto',
							'object-fit': 'cover',
							'object-position': 'center',
							'border-radius': '16px',
						},
					},
				},
			},
		},
	},
	plugins: [require('@tailwindcss/typography')],
};
