const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ReactRefreshPlugin = require("@pmmmwh/react-refresh-webpack-plugin");
const EslintWebpackPlugin = require("eslint-webpack-plugin");

// 抽取公共部分
const getStyleOptions = (importLoaders, loader) => {
    return [
        "style-loader",
        {
            loader: "css-loader",
            options: {
                importLoaders
            }
        },
        "postcss-loader",
        loader
    ].filter(Boolean);
}

module.exports = {
    mode: 'development',
    // 入口文件不再是./src/index.js了
    entry: './src/index.tsx',
    module: {
        rules: [
            {
                oneOf: [
                    {
                        test: /\.css$/,
                        use: getStyleOptions(1)
                    },
                    {
                        test: /\.less$/,
                        use: getStyleOptions(2, 'less-loader')
                    },
                    {
                        test: /\.(js|jsx|ts|tsx)$/,
                        exclude: /node_modules/,
                        use: [
                            {
                                loader: 'babel-loader',
                                options: {
                                    cacheDirectory: true,
                                    cacheCompression: false
                                }
                            },
                            'ts-loader'
                        ]
                    }
                ]
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, 'public/index.html')
        }),
        // open HMR
        new ReactRefreshPlugin(),
        new EslintWebpackPlugin({
            exclude: 'node_modules',
            // 检查jsx js json文件
            extensions: ["jsx", "js", "json", 'ts', 'tsx'],
            // 只对修改内容的文件做检查
            lintDirtyModulesOnly: true,
            // 开启多线程
            threads: true
        })
    ],
    optimization: {},
    devtool: 'cheap-module-source-map',
    devServer: {
        port: 3000
    },
    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.jsx', '.json'],
        alias: {
            '@': path.resolve(__dirname, 'src')
        }
    }
}