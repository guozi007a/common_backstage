const path = require('path');
const PROFILE_ROOT_URL = require('@/config/profileRootUrl_module');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');


// 抽取公共部分
const getStyleOptions = (importLoaders, loader) => {
    return [
        MiniCssExtractPlugin.loader,
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
    mode: 'production',
    entry: {
        index: './src/index.tsx'
    },
    output: {
        path: path.resolve(__dirname, 'lib'),
        filename: '[name].[contenthash:8].js',
        chunkFilename: '[name].[contenthash:8].chunk.js',
        // 配置生产环境下的资源根路径
        publicPath: PROFILE_ROOT_URL,
        clean: {
            // .spa空文件是giteepage提供的解决线上刷新404的方案
            // https://gitee.com/help/articles/4237
            // 该文件应该始终放在打包目录的根目录下，
            // 所以打包时不应被清除
            keep: /\.spa$/
        }
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
                        test: /\.(ico|png|jpg|jpeg|webp|svg)$/,
                        type: 'asset'
                    },
                    {
                        test: /\.(js|jsx|ts|tsx)$/,
                        exclude: /node_modules/,
                        use: [
                            {
                                loader: 'babel-loader',
                                options: {
                                    // 开启缓存
                                    cacheDirectory: true,
                                    // 开启压缩
                                    cacheCompression: true
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
        new MiniCssExtractPlugin({
            filename: '[name].[contenthash:8].css',
            chunkFilename: '[name].[contenthash:8].chunk.css',
            runtime: true
        }),
    ],
    optimization: {
        // 使用代码分割
        splitChunks: {
            chunks: 'all'
        },
        minimizer: [
            new CssMinimizerPlugin({
                exclude: /node_modules/,
                // 多进程压缩
                parallel: true,
                minimizerOptions: {
                    // 移除css注释
                    preset: [
                        "default",
                        {
                            discardComments: { removeAll: true },
                        }
                    ]
                }
            }),
            // 开启压缩
            new TerserPlugin({
                exclude: /node_modules/,
                // 开启多进程压缩
                parallel: true,
                // 删除注释
                terserOptions: {
                    // 开启gzip压缩
                    compress: true,
                    format: {
                        comments: false,
                    },
                },
                extractComments: false
            })
        ]
    },
    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.jsx', '.json'],
        alias: {
            '@': path.resolve(__dirname, 'src')
        }
    }
}