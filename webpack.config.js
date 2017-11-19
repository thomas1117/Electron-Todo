const webpack = require('webpack');
const UglifyJsPlugin = webpack.optimize.UglifyJsPlugin;
const path = require('path');
const env = require('yargs').argv.env; // use --env with webpack 2
let libraryName = 'todo';
let plugins = [], outputFile;

if (env === 'minified') {
    plugins.push(new webpack.DefinePlugin({
        "process.env": {
            NODE_ENV: JSON.stringify(process.env.NODE_ENV || 'production') // default value if not specified
        }
    }));
    plugins.push(new UglifyJsPlugin({ minimize: true }));
}

outputFile = libraryName + '.js';

let output = {
    path: __dirname + '/dist/',
    filename: outputFile,
    library: libraryName,
    libraryTarget: 'umd',
    umdNamedDefine: true
};

if(env == 'example') {
    output.path = __dirname + '/example'
}

const config = {
    entry: __dirname + '/src/index.js',
    devtool: 'source-map',
    output: output,
    devServer: {
        hot: true,
        port: 8080,
        // publicPath: '/example/',
        // historyApiFallback: {
        //     index: '/example/index.html'
        // }
    },
    module: {
        rules: [
            {
                test: /(\.jsx|\.js)$/,
                loaders: ['babel-loader'],
                exclude: /(node_modules|bower_components)/
            },
            {
                test: /\.vue$/,
                loader: 'vue-loader'
            },
            {
                test: /\.scss$/,
                use: [{
                    loader: "style-loader" // creates style nodes from JS strings
                }, {
                    loader: "css-loader" // translates CSS into CommonJS
                }, {
                    loader: "sass-loader" // compiles Sass to CSS
                }]
            }
        ]
    },
    resolve: {
        alias: {
          vue: 'vue/dist/vue.min.js'
        },
        modules: [path.resolve('./node_modules'), path.resolve('./src')],
        extensions: ['.json', '.js', '.vue'],
    },
    plugins: plugins
};

module.exports = config;