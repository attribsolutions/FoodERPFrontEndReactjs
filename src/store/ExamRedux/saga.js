import { call,put,takeEvery } from "redux-saga/effects";
import { ExamApiAxios} from "../../helpers/fakebackend_helper";
import {getExampleSuccess} from "./actions";
import { Get_Example_API} from "./actionTypes";

function* sagaGetApi(){
    try{
        const response=yield call (ExamApiAxios)
        yield put(getExampleSuccess(response.data));
    }
    catch(error)
    {

    }
}
function* examSaga(){
    yield takeEvery( Get_Example_API,sagaGetApi)
}

export default examSaga;