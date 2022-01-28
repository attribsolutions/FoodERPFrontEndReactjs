import { 
  GET_ORDER_LIST_SUCCESS,
     GET_ORDER_PAGE_SUCCESS, 
     SUBMIT_ORDER_PAGE_SUCCESS,
     GET_DIVISIONORDER_LIST_SUCCESS,
     GET_ORDER_LIST_MESSAGE,
     EDIT_ORDER_SUCCESS,
    } from "./actionType"

const INIT_STATE = {
    orders:[],
    submitOrderSuccess:{},
    orderList:[],
    orderListMessage:[],
    editOrderData:{Items:[]},

  }
  
  const orders = (state = INIT_STATE, action) => {
    switch (action.type) {
     
      case GET_ORDER_PAGE_SUCCESS:
        return {
          ...state,
          orders: action.payload,
        }
        case SUBMIT_ORDER_PAGE_SUCCESS:
        return {
          ...state,
          submitOrderSuccess: action.payload,
        }
        case GET_ORDER_LIST_SUCCESS:
        return {
          ...state,
          orderList: action.payload,
        }
        case GET_ORDER_LIST_MESSAGE:
          return {
            ...state,
            orderListMessage: action.payload,
          }
          case EDIT_ORDER_SUCCESS:
          return {
            ...state,
            editOrderData: action.payload,
          }
        case GET_DIVISIONORDER_LIST_SUCCESS:
          return {
            ...state,
            orders: action.payload,
          }
        default:
            return state
        }
        
      }
      
      export default orders