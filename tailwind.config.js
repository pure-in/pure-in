module.exports = {
	content: ['./src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		container: {
			padding: {
				DEFAULT: '5%',
				sm: '32px',
				'2xl': '144px',
			},
			center: true,
		},
		extend: {
			lineHeight: {
				inherit: 'inherit',
				18: '4rem',
			},
			fontFamily: {
				main: 'Roboto, sans-serif',
			},
			colors: {
				base: {
					DEFAULT: '#FFFFFF',
				},
				primary: {
					DEFAULT: '#449BD4',
					light: '#82CEF3',
				},
			},
			animation: {
				bounce: 'bounce 1.5s infinite linear',
			},
		},
	},
	plugins: [require('@tailwindcss/forms')],
};

