import {
  GET_INVOICES_FAIL,
  GET_INVOICES_SUCCESS,
  GET_INVOICE_DETAIL_SUCCESS,
  GET_INVOICE_DETAIL_FAIL,
  ADD_INVOICE,
  ADD_INVOICE_SUCCESS,
  ADD_INVOICE_FAIL,
  DELETE_INVOICE,
  DELETE_INVOICE_SUCCESS,
  EDIT_INVOICES,
  EDIT_INVOICES_SUCCESS,
  ADD_INVOICE_STATE,
  CURRENT_INVOICE_STATE,
  RESET_EDIT_INVOICE_DATA,
  
} from "./actionTypes";

const INIT_STATE = {
  invoices: [],
  invoiceDetail: {},
  error: {},
  addInvoice: {},
  addError: {},
  addSucess: {},
  deleteInvoices: {},
  deleteInvoicesSuccess: {},
 
  editInvoicesId:{},
  editInvoicesData:{"ID":0, "Name": "", "DisplayIndex":0, "DefaultPageIndex": 0, "IconName": ""},
  addInvoiceState:{},
  currentState:{isAdd:false},
  resetInvoicesData:{}



};

const Invoices = (state = INIT_STATE, action) => {
  switch (action.type) {
    case GET_INVOICES_SUCCESS:
      return {
        ...state,
        invoices: action.payload,
      };

    case GET_INVOICES_FAIL:
      return {
        ...state,
        error: action.payload,
      };

    case GET_INVOICE_DETAIL_SUCCESS:
      return {
        ...state,
        invoiceDetail: action.payload,
      };

    case GET_INVOICE_DETAIL_FAIL:
      return {
        ...state,
        error: action.payload,
      };
    case ADD_INVOICE:
      return {
        ...state,
        addInvoice: action.data,
      };
    case ADD_INVOICE_SUCCESS:
      return {
        ...state,
        addSucess: action.payload,
      };

    case ADD_INVOICE_FAIL:
      return {
        ...state,
        addError: action.payload,
      };
    case DELETE_INVOICE:
      return {
        ...state,
        deleteInvoices: action.id,
      };
    case DELETE_INVOICE_SUCCESS:
      return {
        ...state,
        deleteInvoicesSuccess: action.payload,
      };
    case EDIT_INVOICES:
      return { ...state,
         editInvoicesId: action.payload
        };
        case EDIT_INVOICES_SUCCESS:
          return { ...state,
            editInvoicesData: action.payload,
            };
   
      case ADD_INVOICE_STATE:
        return { ...state,
           addInvoiceState: action.payload,
          };
          
      case CURRENT_INVOICE_STATE:
        return { ...state,
           currentState: action.payload
          };
          case RESET_EDIT_INVOICE_DATA:
            return { ...state,
         resetInvoicesData: action.payload
              };
          default:
      return state;
  }
};

export default Invoices;
