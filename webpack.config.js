const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    entry: './src/index.js',
    output: { 
        path: path.resolve(__dirname, 'build'), 
        filename: 'main.js',
        publicPath: '/',
    },
    mode: 'development',
    resolve: {
		extensions: ['.js', '.jsx'],
	},
    module: {
        rules: [
            {
                test: /\.js|jsx$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: [
                            "@babel/preset-env",
                            [
                                "@babel/preset-react", {"runtime": "automatic"}
                            ]
                        ]
                    }
                }
                
            },
            {
                test: /\.(css|scss)$/,
				use: [
					"style-loader",
					"css-loader",
					"sass-loader",
				],
            },
            {
                test: /\.(png|jpg|svg|jpeg|webp)$/,
            /*aquí en test agregas la expresión regular para procesar los diferentes tipos de imagenes que tengas.*/
                type: 'asset/resource',
                generator: {
                   filename: 'assets/pictures/[hash][ext]',
            /*aquí en filename pones la carpeta en donde quieres que se guarden tus imagenes (le agrego el [hash] para evitar problemas con el cache, además [ext] hace referencia a la extensión del archivo que se haya procesado).*/
                }
             },
        ]
    },
    plugins: [ // plugins 
        new HtmlWebpackPlugin({ // instanciamos el plugin para html 
            template: './build/index.html', // archivo raíz a transformar
            filename: './index.html' // el archivo resultante
        }),
        new MiniCssExtractPlugin({
            filename: '[name].css'
        }),
    ],
    devServer:{
        static: path.join(__dirname, 'build'),
        compress:true,
        port:3005,
        historyApiFallback: true,
    }
}