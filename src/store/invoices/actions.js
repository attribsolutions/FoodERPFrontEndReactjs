// import { getItemList } from "../../helpers/fakebackend_helper"
// import { GET_FoodERP_Items } from "../../helpers/url_helper"
import {
  GET_INVOICES,
  GET_INVOICES_FAIL,
  GET_INVOICES_SUCCESS,
  GET_INVOICE_DETAIL,
  GET_INVOICE_DETAIL_FAIL,
  GET_INVOICE_DETAIL_SUCCESS,
  GET_ITEMMASTERS,

  ADD_INVOICE,
  // ADD_INVOICE_FAIL,
  ADD_INVOICE_SUCCESS,

  DELETE_INVOICE,
  DELETE_INVOICE_SUCCESS,
  EDIT_INVOICES,
  EDIT_INVOICES_SUCCESS,
  RESET_EDIT_INVOICE_DATA
} from "./actionTypes";

export const getInvoices = () => ({
  type: GET_INVOICES,
});

export const getItems = () => ({
  type: GET_ITEMMASTERS,
});

export const getInvoicesSuccess = (invoices) => ({
  type: GET_INVOICES_SUCCESS,
  payload: invoices,
});

export const getInvoicesFail = (error) => ({
  type: GET_INVOICES_FAIL,
  payload: error,

});

export const getInvoiceDetail = (invoiceId) => ({
  type: GET_INVOICE_DETAIL,
  invoiceId,
});

export const getInvoiceDetailSuccess = (invoices) => ({
  type: GET_INVOICE_DETAIL_SUCCESS,
  payload: invoices,
});

export const getInvoiceDetailFail = (error) => ({
  type: GET_INVOICE_DETAIL_FAIL,
  payload: error,
});
export const addInvoice = (data) => ({
  type: ADD_INVOICE,
  data,
});
export const addInvoiceSuccess = (addSucess) => ({
  type: ADD_INVOICE_SUCCESS,
  payload: addSucess,
});
export const addInvoicelFail = (addError) => ({
  type: GET_INVOICE_DETAIL_FAIL,
  payload: addError,
});
export const deleteInvoices = (id) => ({
  type: DELETE_INVOICE,
  id ,
  
} );
export const deleteInvoicesSuccess = (deleteMessage) => ({
  type: DELETE_INVOICE_SUCCESS,
  payload:deleteMessage
});


export const editInvoiceId =(id)=>({
  type:EDIT_INVOICES,
id,
})
export const editInvoiceSuccess =(editInvoicesData)=>({
  type:EDIT_INVOICES_SUCCESS,
 payload:editInvoicesData,
})
export const addInvoiceState =(addInvoiceState) => ({
  type:"ADD_INVOICE_STATE",
  addInvoiceState,
} );
export const currentInvoiceState =(currentState) => ({
  type:"CURRENT_INVOICE_STATE",
  payload:currentState,
} );
export const resetInvoiceData =(resetInvoicesData) => ({
  type:RESET_EDIT_INVOICE_DATA,
  resetInvoicesData,
  
} );