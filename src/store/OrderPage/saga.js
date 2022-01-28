import { call, put, takeEvery } from "redux-saga/effects";
import {
  getOrderListSuccess,
  getOrderPageSuccess,
  getDivisionOrdersSuccess,
  editOrderSuccess,
} from "./actions";
import {
  getOrderList,
  getOrderPage,
  submitOrderPage,
  getDivisionOrders,
  editOrderID,
} from "../../helpers/fakebackend_helper";
import {
  GET_ORDER_LIST,
  GET_ORDER_PAGE,
  SUBMIT_ORDER_PAGE,
  GET_DIVISIONORDER_LIST,
  EDIT_ORDER,
} from "./actionType";
import  ItemUnits  from "./DemoData";
function* fetchOrdedr() {
  try {
    const response = yield call(getOrderPage);
    yield put(getOrderPageSuccess(response.data));
    //  console.log('$$fetchorder page response$',response)
  } catch (error) {
    console.log("$$fetchorder  saga page error$", error);
  }
}
function* submitOrder({ data }) {
  try {
    //  yield console.log('$$submitOrder page  before response$',data)
    const response = yield call(submitOrderPage, data);
    yield console.log("$$fetchorder page  after response$", response);
    // yield put(submitOrderPageSuccess(response));
  } catch (error) {
    console.log("$$submit order_saga_page  #@ error$", error);
  }
}

function* fetchOrderList({ listData }) {
  try {
    // yield console.log('$$fetchOrderList  before response$',listData)
    const response = yield call(getOrderList, listData);
    var arr = [];
    if (response.Msg) {
      arr.push(response);
      // yield   console.log('$$fetchOrderList Ifloop  after response$',response);
      yield put(getOrderListSuccess(arr));
    } else {
      yield put(getOrderListSuccess(response.data));
      // yield   console.log('$$fetchOrderList lseloop  after response$',response);
    }
  } catch (error) {
    console.log("$$fetchOrderList_saga  #@ error$", error);
  }
}
function* EditOrder({ orderId }) {
  try {
     yield console.log('$$EditOrder page  before response$',orderId)
    const response = yield call(editOrderID, orderId);
    yield console.log("$$EditOrder page  after response$", response);
    yield console.log("$$EditOrder page  after ItemUnits$", ItemUnits);

    yield put(editOrderSuccess(ItemUnits));
  } catch (error) {
    console.log("$$EditOrder order_saga_page  #@ error$", error);
  }
}

function* fetchDisvisionOrder() {
  try {
    const response = yield call(getDivisionOrders);
    yield console.log("$$fetchDisvisionOrder   after response$", response);
    yield put(getDivisionOrdersSuccess(response));
  } catch (error) {
    console.log("$$fetchOrderList_saga  #@ error$", error);
  }
}

function* orderSaga() {
  yield takeEvery(GET_ORDER_PAGE, fetchOrdedr);
  yield takeEvery(SUBMIT_ORDER_PAGE, submitOrder);
  yield takeEvery(GET_ORDER_LIST, fetchOrderList);
  yield takeEvery(EDIT_ORDER, EditOrder);


  // yield takeEvery(GET_ORDER_LIST_SUCCESS , fetchOrderList)
  yield takeEvery(GET_DIVISIONORDER_LIST, fetchDisvisionOrder);
}

export default orderSaga;
