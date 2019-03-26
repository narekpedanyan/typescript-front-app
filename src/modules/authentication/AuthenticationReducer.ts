import {IAuthenticationActions} from "./AuthenticationAction";

interface IApplicationReducerActions {
    SET_USER: string
}

export const APPLICATION_REDUCER_ACTIONS: IApplicationReducerActions = {
    SET_USER: "AUTHENTICATION:SET_USER"
};

interface IAuthenticationData {
    name: string,
    lastName: string,
    nickname?: string
}

const defaultAuthenticationState: IAuthenticationData = {
    name: "",
    lastName: "",
    nickname: ""
};

export default (state: IAuthenticationData = defaultAuthenticationState, {type, payload}: IAuthenticationActions): IAuthenticationData => {
    switch (type) {

        default:
            return state;
    }
}