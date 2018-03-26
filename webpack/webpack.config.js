const path = require('path')
const Webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    entry: {
        main: './src/App.tsx'
    },
    output: {
            path: path.join(__dirname, '../dist/'),
            filename: '[name].bundle.js',
    },
    watch: true,
    resolve: {
        extensions: ['.ts', '.tsx', '.js']
    },
    devServer: {
        contentBase: path.join(__dirname, '../dist/'),
        port: 2222
    },
    devtool: 'inline-source-map',
    module: {
        rules:[
            {
                test: /.tsx?$/, 
                loader: 'awesome-typescript-loader'
            },
            {
                test: /.html$/, 
                loader: 'raw-loader'
            },
            {
                test: /\.json$/, 
                loader: 'json-loader'                
            },
            {
                test: /\.scss$/, 
                loader: [ 'style-loader', 'css-loader','sass-loader' ],
                exclude: [ 'node_modules' ]
            },
            {
                test: /\.css/,
                loader: [ 'style-loader', 'css-loader' ]
            },
            {
                test:/\.woff(\?.+)?$/,
                loader: 'url-loader?limit=10000&mimetype=application/font-woff'
            },
            {
                test: /\.woff2(\?.+)?$/,
                loader: 'url-loader?limit=10000&mimetype=application/font-woff'
            },
            {
                test: /\.ttf(\?.+)?$/,
                loader: 'file-loader'
            },
            {
                test: /\.eot(\?.+)?$/,
                loader: 'file-loader'
            },
            {
                test: /\.svg(\?.+)?$/,
                loader: 'file-loader'
            },
            { 
                test: /\.png$/, 
                loader: 'url-loader?mimetype=image/png' 
            },
            {
                test: /\.gif$/, 
                loader: 'url-loader?mimetype=image/gif'
            }
        ]
    },
    plugins: [
        new Webpack.DefinePlugin({
            'process.env': {
                'NODE_ENV': JSON.stringify(process.env.NODE_ENV)
            }
        }),
        new HtmlWebpackPlugin({
            template: './src/index.html',
            filename: 'index.html',
            showErrors: true,
            title: 'Crochet Row Counter',
            path: path.join(__dirname, '../dist/'),
            hash: true
        })
    ]
}