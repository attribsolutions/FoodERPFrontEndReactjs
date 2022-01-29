import { call, put, takeEvery } from "redux-saga/effects"

import { GET_PAGES } from "./actionType"
import { getpagesError, getpagesSuccess } from "./actions"

import { getPages } from "../../../helpers/fakebackend_helper"

function* fetchPages() {
    try {
        const response = yield call(getPages)
        console.log("saga:",response);
        yield put(getpagesSuccess(response))
    }
    catch (error) {
        yield put(getpagesError(error))
    }
}

function* pageSaga(){
    yield takeEvery(GET_PAGES,fetchPages)
}

export default pageSaga