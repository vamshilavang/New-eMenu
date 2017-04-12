module.exports = {
	entry: './src/main.js',
	output: {
		path: '/',
		filename: 'index.js'
	},
	devServer: {
		inline: true,
		port:3333
	},
	module: {
       loaders: [
         {
          test: /\.jsx?$/,
          exclude: /(node_modules|bower_components)/,
          loader: 'babel-loader',
          query: {
              presets: ["react", "es2015"]
         }
     }
       ]
	}
}