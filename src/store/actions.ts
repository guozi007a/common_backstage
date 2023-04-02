import * as types from './actionTypes';

/** 获取注入账户的账号密码 */
type AccountType = {
    username: string,
    password: string
}
export const getInjectingAccount = (data: AccountType) => ({ type: types.injectAccount, data });