require('dotenv').config();

module.exports = {
	generateBuildId: async () => {
		// You can, for example, get the latest git commit hash here
		return '1.00';
	},
	i18n: {
		locales: ['en', 'nl'],
		defaultLocale: 'nl',
	},
	env: {
		NEXT_EXAMPLE_CMS_DATOCMS_API_TOKEN: process.env.NEXT_DATOCMS_API_TOKEN,
	},
};
