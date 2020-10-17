module.exports = {
	envs: [
		'browser',
	],
	rules: {
		'comma-dangle': ['error', 'always-multiline'],
		'symbol-description': 'off',
	},
	overrides: [
		{
			files: 'test/*',
			env: 'jest',
		},
	],
};
