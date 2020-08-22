const { merge } = require('webpack-merge')

const nodeExternals = require('webpack-node-externals')

const Webpackbar = require('webpackbar')
const Friendlyerrors = require('friendly-errors-webpack-plugin')
const NodemonPlugin = require('nodemon-webpack-plugin')
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin')

const { NODE_ENV } = require('../../utils/env.vars')

export function NodeBundle(personalConfiguration) {
	// Tempomary solution for modyfing development-specific configuration

	const craftpackConfiguration = {
		mode: NODE_ENV,

		target: 'node',

		watch: true,

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
			plugins: [new TsconfigPathsPlugin()],
		},

		plugins: [
			new Webpackbar({
				name: 'Craftpack',
			}),
			new Friendlyerrors(),
			new NodemonPlugin(),
		],
	}
	const mergedConfiguration = merge(craftpackConfiguration, personalConfiguration)
	return mergedConfiguration
}
