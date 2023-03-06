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
        alias: {
            components: path.resolve(__dirname, 'src/components/'),
            containers: path.resolve(__dirname, 'src/containers/'),
            pages: path.resolve(__dirname, 'src/pages/'),
            hooks: path.resolve(__dirname, 'src/hooks/'),
            context: path.resolve(__dirname, 'src/context/'),
            styles: path.resolve(__dirname, 'src/styles/'),
            icons: path.resolve(__dirname, 'src/assets/icons/'),
            logos: path.resolve(__dirname, 'src/assets/logos/'),
        }
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
                use: [
                    {
                        loader: "file-loader",
                        options: {
                            name: "images/[hash]-[name].[ext]",
                        },
                    },
                ],
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
        historyApiFallback: true,
    }
}