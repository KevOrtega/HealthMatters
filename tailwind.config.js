/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./app/**/*.{js,ts,jsx,tsx}",
		"./pages/**/*.{js,ts,jsx,tsx}",
		"./components/**/*.{js,ts,jsx,tsx}",

		// Or if using `src` directory:
		"./src/**/*.{js,ts,jsx,tsx}",
	],
	theme: {
		colors: {
			transparent: "transparent",
			"deep-blush": "#DE7389",
			"kaitoke-green": "#005227",
			"deep-sea": "#038554",
			"caribbean-green": "#03BB85",
			"mine-shaft": "#333333",
			viking: "#68DDBD",
			anakiwa: "#A4FFF7",
			white: "#ffffff",
			egg: "#ccc",
		},
		fontFamily: {
			sans: ["Poppins", "sans-serif"],
			handwrite: ["Dancing Script", "cursive"],
		},
		fontWeight: {
			medium: "500",
			bold: "700",
		},
		extend: {},
	},
	plugins: [],
};
