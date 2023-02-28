const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/index.js',
    output: { 
        path: path.resolve(__dirname, 'build'), 
        filename: 'main.js' 
    },
    mode: 'development',
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
            }
        ]
    },
    plugins: [ // plugins 
        new HtmlWebpackPlugin({ // instanciamos el plugin para html 
            template: './build/index.html', // archivo raíz a transformar
            filename: './index.html' // el archivo resultante
        })
    ]
}