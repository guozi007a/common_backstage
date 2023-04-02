/** 提供登录的账号列表，点击注入按钮，对应账号会自动填充至登录表单中 */

export interface AccountType {
    key: string, // 唯一标识
    username: string; // 账号
    password: string; // 密码
    limits: string[]; // 权限
}

export const accountsList: AccountType[] = [
    {
        key: '1',
        username: 'root',
        password: '123',
        limits: ['read', 'write'],
    },
    {
        key: '2',
        username: 'admin',
        password: '123',
        limits: ['read'],
    },
];

/** 不同的权限，显示不同颜色的标签 */
export const limitTagColor = (limit: string): string => {
    switch (limit) {
        case 'read':
            return 'green';
        case 'write':
            return 'volcano';
        default:
            return 'geekblue'
    }
};
