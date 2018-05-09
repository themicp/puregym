module.exports = {
	entry: [
        './src/main.js',
    ],
	module: {
		rules: [
        {
            test: /\.js$/,
            exclude: /node_modules/,
            use: [{
                loader: 'babel-loader',
                options: { presets: ['react', 'stage-1'] }
            }],
        },
        {
            test: /\.less$/,
            use: [{
                loader: "style-loader" // creates style nodes from JS strings
            }, {
                loader: "css-loader" // translates CSS into CommonJS
            }, {
                loader: "less-loader" // compiles Less to CSS
            }]
        },
        {
            test: /\.css$/,
            use: [{
                loader: "css-loader" // creates style nodes from JS strings
            }]
        }
        ],
	},
	output: {
		filename: 'static/bundle.js'
	}
}
