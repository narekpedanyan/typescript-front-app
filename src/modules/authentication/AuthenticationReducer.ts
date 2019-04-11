import { LoginAction, UserData } from './AuthenticationAction';

interface LoginState {
    user: UserData;
    isLoading: boolean;
    error: string;
}

const initialState: LoginState = {
    user: null,
    error: null,
    isLoading: false
};

export function authData(state = initialState, action: LoginAction): LoginState {
    switch (action.type) {
        case 'LOGIN_REQUEST':
            return {...state, isLoading: true}
        case 'LOGIN_SUCCESS':
            return {...state, isLoading: false, user: action.user}
        case 'LOGIN_FAILED':
            return {...state, isLoading: false, error: action.error}
        default:
            return state;
    }
}