require('dotenv').config();

module.exports = {
	i18n: {
		locales: ['en', 'nl-BE'],
		defaultLocale: 'nl-BE',
	},
	env: {
		NEXT_EXAMPLE_CMS_DATOCMS_API_TOKEN:
			process.env.NEXT_EXAMPLE_CMS_DATOCMS_API_TOKEN,
	},
};
