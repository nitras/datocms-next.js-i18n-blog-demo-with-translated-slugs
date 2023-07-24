require('dotenv').config();

module.exports = {
	i18n: {
		locales: ['nl', 'en'],
		defaultLocale: 'nl',
	},
	env: {
		NEXT_EXAMPLE_CMS_DATOCMS_API_TOKEN: process.env.NEXT_DATOCMS_API_TOKEN,
	},
};
