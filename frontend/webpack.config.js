const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = (env, argv) => {
    return {
        entry: './src/index.js',
        output: {
            path: path.resolve(__dirname, 'dist'),
            filename: 'bundle.js',
            clean: true,
        },
        devServer: {
            port: 8080,
            hot: true,
            open: true
        },
        module: {
            rules: [
                {
                    test: /\.js$/,
                    exclude: /node_modules/,
                    use: {
                        loader: 'babel-loader',
                        options: {
                            presets: [['@babel/preset-env', { targets: "defaults" }]]
                        }
                    },
                    type: 'javascript/auto'
                },
                { test: /\.html$/, use: { loader: 'html-loader' } },
                { test: /\.css$/, use: ['style-loader', 'css-loader'] }
            ]
        },
        plugins: [
            new HtmlWebpackPlugin({
                template: './src/index.html',
                filename: 'index.html'
            })
        ]
    };
};
