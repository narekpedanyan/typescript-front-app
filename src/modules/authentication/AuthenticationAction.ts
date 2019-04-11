
interface LoginData {
    email: string;
    password: string;
}

export interface UserData  {
        id: string,
        email: string,
        userName: string,
        lastName: string
}

export type LoginAction =
    | { type: 'LOGIN_REQUEST'; input: LoginData }
    | { type: 'LOGIN_SUCCESS'; user: UserData }
    | { type: 'LOGIN_FAILED'; error: string };


export function loginRequest(input: LoginData): LoginAction {
    return { type: 'LOGIN_REQUEST', input };
}

export function loginSuccess(user: UserData): LoginAction {
    return { type: 'LOGIN_SUCCESS', user };
}

export function loginFailed(error: string): LoginAction {
    return { type: 'LOGIN_FAILED', error };
}