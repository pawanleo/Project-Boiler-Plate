import * as actions from "./authActionTypes"

export function login(
    data:{username:string,
        password:string}

):actions.LoginAction{
    return {
        type:actions.LOGIN,
       data
}}