/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
			colors: {
				primary: {
					50: "#bdc7ee",
					100: "#9ba8e6",
					200: "#7888de",
					300: "#5466d7",
					400: "#3043d0",
					500: "#2633b0",
					600: "#1e268e",
					700: "#161a6b",
					800: "#0e1048",
					900: "#070725",
				},
				secondary: {
					50: "#0c0c54",
					100: "#0c0c4f",
					200: "#0b0b49",
					300: "#0b0b44",
					400: "#0a0a3f",
					500: "#0a0a39",
					600: "#09092D",
					700: "#08082f",
					800: "#08082a",
					900: "#070725",
				},
			},
			keyframes: {
				wiggle: {
					"0%, 100%": { transform: "rotate(-4deg)" },
					"50%": { transform: "rotate(4deg)" },
				},
			},
			animation: {
				wiggle: "wiggle 200ms ease-in-out",
			},
		},
		fontFamily: {
			primary: ["Jost", "Fira Code", "monospace"],
			secondary: ["Comic Neue", "open sans", "sans-serif"],
		},
  },
  plugins: [],
}
