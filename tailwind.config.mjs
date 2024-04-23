import defaultTheme from "tailwindcss/defaultTheme";

/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		fontFamily: {
			serif: [
				"Fraunces Variable",
				...defaultTheme.fontFamily.serif,

			],
			sans: [
				"Plus Jakarta Sans Variable",
				...defaultTheme.fontFamily.sans,
			],
		},
		extend: {
			colors: {
				garden: {
					50: "#f5faf3",
					100: "#e7f6e2",
					200: "#cfebc7",
					300: "#a9da9b",
					400: "#7bc167",
					500: "#57a542",
					600: "#4d9738",
					700: "#386b2a",
					800: "#305526",
					900: "#284621",
					950: "#12260d",
				},
				smoke: {
					50: "#f6f6f6",
					100: "#e7e7e7",
					200: "#d1d1d1",
					300: "#b0b0b0",
					400: "#888888",
					500: "#6d6d6d",
					600: "#5d5d5d",
					700: "#4f4f4f",
					800: "#454545",
					900: "#3d3d3d",
					950: "#191919",
				},
			}
		},
	},
	plugins: [],
}
