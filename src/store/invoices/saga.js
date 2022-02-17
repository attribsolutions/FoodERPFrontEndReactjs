import { call, put, takeEvery } from "redux-saga/effects";

// Crypto Redux States
import {
  GET_INVOICES,
  GET_INVOICE_DETAIL,
  ADD_INVOICE,
  DELETE_INVOICE,
  EDIT_INVOICES,
  ADD_INVOICE_STATE,
  RESET_EDIT_INVOICE_DATA,
} from "./actionTypes";
import {
  getInvoicesSuccess,
  getInvoicesFail,
  getInvoiceDetailSuccess,
  getInvoiceDetailFail,
  addInvoiceSuccess,
  addInvoicelFail,
  deleteInvoicesSuccess,
  editInvoiceSuccess,
  addInvoiceState,
  currentInvoiceState,
  editInvoiceId,
} from "./actions";

//Include Both Helper File with needed methods
import {
  getInvoices,
  getInvoiceDetail,
  deteletInvoices,
  editInvoicesPage,
  add,
} from "../../helpers/fakebackend_helper";

function* fetchInvoices() {
  try {
    const response = yield call(getInvoices);
    // yield console.log("saaga  fetch nvoice ",response)
    yield put(getInvoicesSuccess(response));
  } catch (error) {
    yield put(getInvoicesFail(error));
  }
}

function* fetchInvoiceDetail({ invoiceId }) {
  try {
    const response = yield call(getInvoiceDetail, invoiceId);
    yield put(getInvoiceDetailSuccess(response));
  } catch (error) {
    yield put(getInvoiceDetailFail(error));
  }
}

function* addInvoice({ data }) {
  try {
    yield console.log("Addinvoice : saga befor axios pass data", data); //comment line only

    const response = yield call(add, data);
    yield put(addInvoiceSuccess(response));

    yield console.log(" Add _invoice : after axios Addapi response ", response); //comment line only
  } catch (error) {
    yield put(addInvoicelFail(error));
  }
}

function* deleteInvoices({ id }) {
  try {
    //  yield console.log("DeleteInvoice aaa : saga befor axios pass data", id); //comment line only

    const response = yield call(deteletInvoices, id);
    yield put(deleteInvoicesSuccess(response));

    // yield console.log(" DeleteInvoice : after axios Addapi response ", response); //comment line only
  } catch (error) {
    // yield put(addInvoicelFail(error));
    yield console.log("delete invoice sada : ", error);
  }
}
function* editInvoices({ id }) {
  try {
    // yield console.log("EditInvoice  : saga befor axios pass data", id); //comment line only
if(id!=""){
    const response = yield call(editInvoicesPage, id);
    yield put(editInvoiceSuccess(response));
    yield console.log(" EditInvoice : after axios Addapi response ", response); //comment line only

    yield put(editInvoiceId(""));
}else{}
  } catch (error) {
    // yield put(addInvoicelFail(error));
    yield console.log("EditInvoice invoice saga error  : ", error);
  }
}

function* addInvoicesStatea(InvoiceState) {
  try {
    // const response = yield call(getInvoices);
    yield console.log("saaga  fetch nvoice ", InvoiceState.addInvoiceState);
    yield put(currentInvoiceState(InvoiceState.addInvoiceState));
  } catch (error) {
    yield console.log("saaga  fetch nvoice ", error);
  }
}
function* restInvoicesData(resetInvoicesData) {
  try {
    // const response = yield call(getInvoices);
    yield console.log("saaga  after reset ", resetInvoicesData);
    yield put(editInvoiceSuccess(resetInvoicesData));
  } catch (error) {
    yield console.log("saaga  reset ", error);
  }
}

function* invoiceSaga() {
  yield takeEvery(GET_INVOICES, fetchInvoices);
  yield takeEvery(GET_INVOICE_DETAIL, fetchInvoiceDetail);
  yield takeEvery(ADD_INVOICE, addInvoice);
  yield takeEvery(DELETE_INVOICE, deleteInvoices);
  yield takeEvery(EDIT_INVOICES, editInvoices);
  yield takeEvery(ADD_INVOICE_STATE, addInvoicesStatea);
 yield takeEvery(RESET_EDIT_INVOICE_DATA, restInvoicesData);

}

export default invoiceSaga;
