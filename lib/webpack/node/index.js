const { merge } = require('webpack-merge')

const nodeExternals = require('webpack-node-externals')

const Webpackbar = require('webpackbar')
const Friendlyerrors = require('friendly-errors-webpack-plugin')
// Const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin')

const { NODE_ENV } = require('../../utils/env.vars')

export function NodeBundle(personalConfiguration) {
	const craftpackConfiguration = {
		mode: NODE_ENV,

		target: 'node',

		externals: [nodeExternals()],

		stats: 'none',

		devServer: {
			quiet: true,
		},

		module: {
			rules: [
				{
					test: /\.ts$/,
					use: [
						{
							loader: 'ts-loader',
						},
					],
				},
			],
		},

		// Resolve basic filetypes that occur in back-end enviroment.
		resolve: {
			extensions: ['.ts', '.tsx', '.js'],
		},

		plugins: [
			new Webpackbar({
				name: 'Craftpack',
			}),
			new Friendlyerrors(),
			// New TsconfigPathsPlugin(),
		],
	}
	const mergedConfiguration = merge(craftpackConfiguration, personalConfiguration)
	return mergedConfiguration
}
