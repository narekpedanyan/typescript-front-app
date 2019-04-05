import {APPLICATION_REDUCER_ACTIONS} from './AuthenticationReducer';

export interface IAuthenticationActions {
    type: string,
    payload?: {
        name?: string,
        lastName?: string,
        nickname?: string
    }
}

export function setUser(payload): IAuthenticationActions {
    return {type: APPLICATION_REDUCER_ACTIONS.SET_USER, payload};
}