import { call, put, takeEvery } from "redux-saga/effects";

import {  getItemCategory, getItemSubCategory, postBaseUnit, submitOrderPage } from "../../helpers/fakebackend_helper";
import {
    POST_BASE_UNIT,
    ADD_MASTER_ITEM,
    GET_ITEM_CATEGORY_SUCCESS,
    GET_ITEM_SUB_CATEGORY_SUCCESS,
    GET_ITEM_CATEGORY,
    GET_ITEM_SUB_CATEGORY,
 
}from './actionTypes'
  

import { addMasterListMessage, getItemCategorySuccess, getItemSubCategorySuccess, postBaseUnitSuccess } from "./actions";

function* BaseUnit() {
  try {
    console.log('$$PostBaseUnit  bfore  page response$')
     
    const response = yield call(postBaseUnit);
    yield put(postBaseUnitSuccess(response));
     console.log('$$PostBaseUnit after page response$',response)
  } catch (error) {
    console.log("$$PostBaseUnit  saga page error$", error);
  }
}
function* addMasterList({ data }) {
  try {
    //  yield console.log('$$addMasterList page  before response$',data)
    const response = yield call(submitOrderPage, data);
    // yield console.log("$$addMasterList page  after response$", response);
    yield put(addMasterListMessage(response));
  } catch (error) {
    console.log("$$addMasterList _saga_page  #@ error$", error);
  }
}

function* getItemCategorySaga() {
  try {
     yield console.log('$$ getItemCategory page  before response$')
    const response = yield call(getItemCategory);
    yield console.log("$$getItemCategory page  after response$",response );
    yield put(getItemCategorySuccess(response));
  } catch (error) {
    console.log("$$getItemCategory _saga_page  #@ error$", error);
  }
}

function* ItemSubCategory({itemId}) {
  try {
     yield console.log('$$ getItemSubCategory page  before response$',itemId)
    const response = yield call(getItemSubCategory,itemId);
    yield console.log("$$getItemSubCategory page  after response$", response);
    yield put(getItemSubCategorySuccess(response));
  } catch (error) {
    console.log("$$getItemSubCategory _saga_page  #@ error$", error);
  }
}

function* masterSaga() {
  yield takeEvery(POST_BASE_UNIT, BaseUnit);
  yield takeEvery(ADD_MASTER_ITEM, addMasterList);
  yield takeEvery(ADD_MASTER_ITEM, addMasterList);
  yield takeEvery(GET_ITEM_CATEGORY, getItemCategorySaga);
  yield takeEvery(GET_ITEM_SUB_CATEGORY, ItemSubCategory);
 
}

export default masterSaga;
