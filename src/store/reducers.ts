import * as types from './actionTypes';
import { combineReducers } from 'redux';

interface ActionType {
    type: string;
    data?: any
}

/** 注入的账户 */
const initAccount = {
    username: '',
    password: ''
};
const injectReducer = (state = initAccount, action: ActionType) => {
    switch (action.type) {
        case types.injectAccount:
            return action.data;
        default:
            return state;
    }
}

const reducers = combineReducers({
    injectReducer
})

export default reducers;