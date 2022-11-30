import { put, call } from 'redux-saga/effects';

interface RequestFailureProps{
  type:(args:any)=>any, data:any, status:number, onFailure:(...args:any)=>any
}
export default function* requestFailure({ type, data, status, onFailure }:RequestFailureProps) {
  switch (status) {
    case 403:
      // TODO: Define what to do on 403
      break;
    case 401:
      // TODO: Define what to do on 401
      break;
    case 408:
      // TODO: Define what to do on 408
      break;
    default:
      break;
  }
  yield put(type(data));
  if (onFailure) yield call(onFailure);
}
