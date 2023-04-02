const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');


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
    entry: {
        index: './src/index.tsx'
    },
    output: {
        path: path.resolve(__dirname, 'lib'),
        filename: '[name].[contenthash:8].js',
        chunkFilename: '[name].[contenthash:8].chunk.js',
        clean: true
    },
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
                        test: /\.ico$/,
                        type: 'asset'
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
            // 直接配置title是不起作用的
            // 需要在index.html中的title元素中写入
            // <%= htmlWebpackPlugin.options.title %>
            title: 'React Common Backstage',
            template: path.resolve(__dirname, 'public/index.html'),
            favicon: path.resolve(__dirname, 'public/favicon.ico')
        }),
    ],
    optimization: {},
    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.jsx', '.json'],
        alias: {
            '@': path.resolve(__dirname, 'src')
        }
    }
}