/** @type {import('tailwindcss').Config} */
const cssnano = require('cssnano')
const autoprefixer = require('autoprefixer')
const tailwindcss = require('tailwindcss')

module.exports = {
	content: [
		'*.html',
        './*.html',
		'./**/*.html',
        './**/**/*.html',
    ],
	theme: {
		extend: {
			colors: {
				'primary_dark': '#21252A',
				'primary_main': '#1D2D44',
				'primary_light': '#CCE1FF',
				'primary_highlight': '#1877FF',
				'text_main': '#262626',
				'text_main2': '#4C4C4C',
				'text_light': '#999999',
				'text_disabled': '#F2F2F2',
				'bg': '#F7F7F7',
			},
			fontFamily: {
				custom: ['iranyekan', 'sans-serif'],
			},
		},
	},
	plugins: [tailwindcss, autoprefixer].concat(
		process.env.NODE_ENV === 'production'
			? [cssnano({ preset: 'default' })]
			: []
	),
}
