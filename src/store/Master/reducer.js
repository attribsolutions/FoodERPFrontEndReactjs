import { POST_BASE_UNIT_SUCCESS, 
    ADD_MASTER_ITEM_MESSAGE,
    GET_ITEM_CATEGORY_SUCCESS,
    GET_ITEM_SUB_CATEGORY_SUCCESS
 } from "./actionTypes";

const INIT_STATE = {
  baseUnit: [],
  AddMessage: {},
  itemCategoryData:[],
  itemSubCategory:[],

};

const addMaster = (state = INIT_STATE, action) => {
  switch (action.type) {
    case POST_BASE_UNIT_SUCCESS:
      return {
        ...state,
        baseUnit: action.payload,
      };

    case ADD_MASTER_ITEM_MESSAGE:
      return {
        ...state,
        AddMessage: action.payload,
      };
      case GET_ITEM_CATEGORY_SUCCESS:
      return {
        ...state,
        itemCategoryData: action.payload,
      };
      case GET_ITEM_SUB_CATEGORY_SUCCESS:
      return {
        ...state,
        itemSubCategory: action.payload,
      };
    default:
      return state;
  }
};

export default addMaster;
