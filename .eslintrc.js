module.exports = {
    "env": {
        "browser": true,
        "es2021": true,
        "node": true
    },
    "extends": [
        "eslint:recommended",
        "plugin:react/recommended",
        // 配置后 不通过import引入React也不会报错了
        // 无需额外安装
        "plugin:react/jsx-runtime",
        "plugin:@typescript-eslint/recommended"
    ],
    "overrides": [
        {
            files: ["**/*.tsx"],
            // react默认使用prop-types来检查类型
            // 如果使用了typescript，就把这个关掉，
            // 不然会报一些没有意义的错误
            rules: {
                "react/prop-types": "off"
            }
        }
    ],
    "parser": "@typescript-eslint/parser",
    "parserOptions": {
        "ecmaVersion": "latest",
        "sourceType": "module"
    },
    "plugins": [
        "react",
        "@typescript-eslint"
    ],
    "rules": {
        // 不允许混合使用空格键和tab键进行缩进，
        // 设置为0，即可以混用，实际开发中肯定是要混用的
        "no-mixed-spaces-and-tabs": 0,
        // 禁止出现未使用的变量，这里选择关闭检查，
        // 因为很多时候已经使用或无法直接使用，会给无聊的提示
        "no-unused-vars": 0,
        // 关闭any检查，有时候需要用到any
        "@typescript-eslint/no-explicit-any": 0,
        // 关闭严格的null检查，因为设置!断言后它还是会警告
        "@typescript-eslint/no-non-null-assertion": 0,
    }
}
