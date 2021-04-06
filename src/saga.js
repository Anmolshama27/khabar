import {call,put,takeEvery,takeLatest} from 'redux-saga/effects';
 import {REQUEST_API_DATA,receiveApiData} from './actions'
import { fetchData } from "./api";

//for register page
import { registerUserService } from './authenticationServices';
import* as types from './Signupaction';

function* getApiData(action){
try{
        //api call
    const data= yield call(fetchData);
    yield put(receiveApiData(data));
}
catch (e){
    console.log(e);

  
}
}

 // for register

export function* registerSaga(payload) {
    try {
      const response = yield call(registerUserService, payload);
      yield [
        put({ type: types.REGISTER_USER_SUCCESS, response })
      ];
    } catch(error) {
      yield put({ type: types.REGISTER_USER_ERROR, error });
    }
  }


export default function* mySaga(){
    yield takeLatest(REQUEST_API_DATA, getApiData);
    yield takeLatest(types.REGISTER_USER, registerSaga);
}
