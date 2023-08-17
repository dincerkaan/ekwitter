/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{js,jsx,ts,tsx}'],
	theme: {
		extend: {
			colors: {
				primary: {
					base: 'hsl(79, 84%, 65%)',
					dark: 'hsl(79, 84%, 45%)',
					light: 'hsl(79, 84%, 90%)',
				},
				gray: {
					dark: '#657786',
					light: '#AAB8C2',
					extraLight: '#E1E8ED',
					lightest: '#F5F8FA',
				},
				black: '#14171A',
			},
		},
	},
	plugins: [],
};
