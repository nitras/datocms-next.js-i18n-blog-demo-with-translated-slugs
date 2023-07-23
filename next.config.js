require('dotenv').config();

module.exports = {
	i18n: {
		locales: ['en', 'nl', 'nl-BE', 'ru'],
		defaultLocale: 'nl',
	},
	env: {
		NEXT_EXAMPLE_CMS_DATOCMS_API_TOKEN:
			process.env.NEXT_EXAMPLE_CMS_DATOCMS_API_TOKEN,
	},
};
