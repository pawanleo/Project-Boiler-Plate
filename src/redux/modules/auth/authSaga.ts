import {put,call,takeEvery,all,fork}from "redux-saga/effects"
import request from "../../helpers/request";
import * as actionCreators from "./authActionCreator";
import * as actionTypes from "./authActionTypes";

function* login({data}:actionTypes.LoginAction){
 yield call(request)
}

function* Sagas(){
    yield takeEvery(actionTypes.LOGIN,login)
}
export default function* authSaga(){
    yield all([fork(Sagas)])
}