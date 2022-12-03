import { push } from "connected-react-router";
import { call, put } from "redux-saga/effects";

interface RequestSuccessProps {
  type: (args: any) => any;
  data: any;
  redirect: string;
  callback: (...args: any) => any;
  onSuccess: (...args: any) => any;
}
export default function* requestSuccess({
  type,
  data,
  redirect,
  callback,
  onSuccess,
}: RequestSuccessProps) {
  if (redirect) yield put(push(redirect));
  yield put(type(data));
  if (callback) yield call(callback, data);
  if (onSuccess) yield call(onSuccess, data);
}
