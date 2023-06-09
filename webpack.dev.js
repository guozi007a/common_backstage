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
    output: {
        // 约定根目录，解决刷新后找不到根文件的问题
        publicPath: '/'
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
                        test: /\.(ico|png|jpg|jpeg|webp|svg|gif)$/,
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
        port: 3000,
        // 解决本地路由刷新404的问题
        historyApiFallback: true,
        client: {
            // 出现警告或报错时，默认在浏览器中显示全屏覆盖。
            // 这里设置为false，就不会覆盖在浏览器上了
            overlay: {
                errors: true,
                warnings: false
            }
        }
    },
    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.jsx', '.json'],
        alias: {
            '@': path.resolve(__dirname, 'src')
        }
    }
}