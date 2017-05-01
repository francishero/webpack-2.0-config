
const webpack=require('webpack');
//path provides the utilities for working with file and directory paths
//we use this because webpack needs an absolute path to work properly
const path =require('path');


//we write code
//webpack reads it, compiles it and spits a compiled version for the browser

let config={
	//file to be read by webpack
	entry:'./src/index.js',

	//webpack compiled output
	output:{
		path:path.resolve(__dirname,'./public'),
		filename:'output.js'
	},

	//loaders allow us to preprocess files as we load or require them
	//in this module we are telling webpack to look for .js files and compile with babel

	module:{
		rules:[
			{
				test:/\.js$/, //files ending with .js
				exclude:/node_modules/, //dont include the node_modules
				loader:"babel-loader"
			},
			//we need to be able to compile scss to css
			//first run npm i --save-dev sass-loader node-sass css-loader style-loader
			//create a styles.scss 
			//require it the index.js
			{
				test:/\.scss$/, //files ending in .scss
				loader:["style-loader","css-loader","sass-loader"]
			}
		]
	}

}


//export this file so that the outside world can read it
module.exports=config;