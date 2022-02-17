import { call, put, takeEvery } from "redux-saga/effects";
import { getDefaultModule, getPageAcess, postAddPage, postDefaultMogeuleId, postSubModule } from "../../helpers/fakebackend_helper";
import { addPageSuccess, getDefaultModuleSuccess, getPageAcessSuccess, postDefaultModuleSuccess, postSubModuleSuccess } from "./Actions";
import { ADD_PAGE, GET_DEFAULT_MODULE, GET_PAGE_ACCESS, POST_DEFAULT_MODULE_ID, POST_SUB_MODULE } from "./actionType";

function* moduleId() {
  try {
     yield console.log("post module saga : saga befor axios pass data",); //comment line only

    const response = yield call(getDefaultModule);
    yield put(getDefaultModuleSuccess(response));
    yield console.log(" post module saga : after axios Addapi response ", response); //comment line only
  } catch (error) {
    yield console.log("postDefaultModuleId saga error :", error);
  }
}
function* SubModule({ id }) {
  try {
  //  yield console.log("post sub  module saga : saga befor axios pass data", id); //comment line only

    const response = yield call(postSubModule, id);
    yield put(postSubModuleSuccess(response));
    // yield console.log(" post sub  module saga : after axios Addapi response ", response); //comment line only
  } catch (error) {
    yield console.log("postSubModule saga error :", error);
  }
}
function* PageAcess() {
  try {
    //  yield console.log("PageAcess : saga befor axios pass data"); //comment line only

    const response = yield call(getPageAcess);
    yield put(getPageAcessSuccess(response));
    // yield console.log(" PageAcessSuccess : after axios Addapi response ", response); //comment line only
  } catch (error) {
    yield console.log("PageAcessSuccess :", error);
  }
}

function* Addpage({ Data }) {
  try {
   
    yield console.log("Addpage saga : saga befor axios pass data", Data); //comment line only

    const response = yield call(postAddPage, Data);
    yield put(addPageSuccess(response));
    yield console.log(" Addpage saga : after axios Addapi response ", response); //comment line only
  } catch (error) {
    yield console.log("postSubModule saga error :", error);
  }
}

function* moduleIdSaga() {
  yield takeEvery(GET_DEFAULT_MODULE, moduleId);
  yield takeEvery(POST_SUB_MODULE, SubModule);
  yield takeEvery(ADD_PAGE, Addpage);
  yield takeEvery(GET_PAGE_ACCESS, PageAcess);



}
export default moduleIdSaga;
