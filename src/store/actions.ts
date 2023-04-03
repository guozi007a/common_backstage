import * as actionTypes from './actionTypes';
// import * as payloadTypes from './payloadTypes';
import {
    IA
} from './payloadTypes';

export const getInjectingAccount = (data: IA) => ({
    type: actionTypes.injectAccount,
    data
});