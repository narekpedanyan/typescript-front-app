import {IAuthenticationActions} from "./AuthenticationAction";

interface IApplicationReducerActions {
    SET_USER: string
}

export const APPLICATION_REDUCER_ACTIONS: IApplicationReducerActions = {
    SET_USER: "AUTHENTICATION:SET_USER"
};

interface IAuthenticationData  {
    user: object
}

const defaultAuthenticationState: IAuthenticationData = {
    user: null
};

export default (state: IAuthenticationData = defaultAuthenticationState, {type, payload}: IAuthenticationActions): IAuthenticationData => {
    switch (type) {

        default:
            return state;
    }
}