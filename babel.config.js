module.exports = {
    presets: [
        [
            '@babel/preset-env',
            {
                // 配置该项后，就不需要使用@babel/plugin-transform-plugin了
                // 因为useBuiltIns和它一样的作用
                useBuiltIns: 'usage',
                corejs: {
                    version: '3.29.1',
                    proposals: true
                }
            }
        ],
        [
            '@babel/preset-react',
            {
                // 使用最新的react/jsx-runtime来解析jsx，而非React.createElement
                // 此时不需要import引入React
                runtime: 'automatic'
            }
        ]
    ]
}