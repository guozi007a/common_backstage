const path = require('path');
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
        chunkFilename: '[name].[contenthash:8].chunk.js'
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