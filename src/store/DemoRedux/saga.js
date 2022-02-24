
import { call, put, takeEvery } from "redux-saga/effects";
import { demApiAxios } from "../../helpers/fakebackend_helper";
import { getDemoApiSuccess } from "./actions";
import { GET_DEMO_API } from "./actionTypes";



function* sagaGetApi() {
    try {
    const response= yield call(demApiAxios);
        yield put(getDemoApiSuccess(response.data));
     
      } catch (error) {
       console.log("demoSaga error",error)
      }
}




function* demoSaga() {
    yield takeEvery(GET_DEMO_API, sagaGetApi);
}

export default demoSaga;
