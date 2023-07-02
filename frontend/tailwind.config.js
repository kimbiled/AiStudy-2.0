/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	mode: "jit",
	theme: {
		extend: {
			colors: {
				primary: "#4C4F6A",
				secondary: "#00f6ff",
				dimWhite: "rgba(255, 255, 255, 0.7)",
				dimBlue: "rgba(9, 151, 124, 0.1)",
				smrtBlue: "#167BDE",
				smrtBlack: "#282C4B",
				footerTitle: "#7DD5B3",
				grad2: "#C6EBC6",
				footerBg: "#1D293C",
				transDesc: "#9495A6",
				chosenQuestion: "#60A6EA",
				modalBg: "#0000004D",
				practiceGray: "#9495A6",
				practiceBorderGray: "#C0C0C0",
				subscribeButton: "#1D293C",
			},
			fontFamily: {
				poppins: ["Poppins", "sans-serif"],
				lato: ["Lato", "sans-serif"],
			},
		},
		screens: {
			xs: "480px",
			ss: "620px",
			sm: "768px",
			md: "1060px",
			lg: "1200px",
			xl: "1700px",
		},
	},
	plugins: [],
};
