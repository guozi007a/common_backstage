import * as actionTypes from './actionTypes';
// import * as payloadTypes from './payloadTypes';
import { combineReducers } from 'redux';
import {
    IA
} from './payloadTypes';

interface ActionType<T> {
    type: string;
    data?: T
}

/** 注入的账户 */
const initAccount = {
    username: '',
    password: ''
};

const injectReducer = (
    state: IA = initAccount,
    action: ActionType<IA>
) => {
    switch (action.type) {
        case actionTypes.injectAccount:
            return {
                ...state,
                ...action.data
            };
        default:
            return state;
    }
}

const reducers = combineReducers({
    injectReducer
})

export default reducers;