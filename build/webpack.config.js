const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const WebpackNodeExternals = require('webpack-node-externals');
const path = require('path');
const paths = require('./paths');

module.exports = {
    mode: "production",
    externals: [WebpackNodeExternals()],
    resolve: {
        extensions: paths.moduleFileExtensions.map((ext) => `.${ext}`),
        modules: ["node_modules"].concat(
            process.env.NODE_PATH.split(path.delimiter).filter(Boolean)
        ),
    },
    plugins: [new CleanWebpackPlugin()],
    entry: {
        app: "./src/index"
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
        ],
    },
    output: {
        path: path.resolve(__dirname, "../dist"),
        filename: "[name].js",
    },
}