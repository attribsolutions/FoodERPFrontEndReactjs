import{  POST_BASE_UNIT,
    POST_BASE_UNIT_SUCCESS,
    ADD_MASTER_ITEM,
    ADD_MASTER_ITEM_MESSAGE,
    GET_ITEM_CATEGORY_SUCCESS,
    GET_ITEM_CATEGORY,
    GET_ITEM_SUBCATEGORY,
    GET_ITEM_SUB_CATEGORY,
    GET_ITEM_SUB_CATEGORY_SUCCESS,
} from './actionTypes'



export const postBaseUnit = () => ({
    type: POST_BASE_UNIT,
   
  });
  export const postBaseUnitSuccess = (baseUnit) => ({
    type: POST_BASE_UNIT_SUCCESS,
    payload:baseUnit,
  });
  export const addMasterList = (addListData) => ({
    type: ADD_MASTER_ITEM,
    payload:addListData,
  });
  export const addMasterListMessage = (baseUnitData) => ({
    type: ADD_MASTER_ITEM_MESSAGE,
    baseUnitData,
  });
  export const getItemCategory = () => ({
    type: GET_ITEM_CATEGORY,
   
  });
  export const getItemCategorySuccess = (itemCategoryData) => ({
    type: GET_ITEM_CATEGORY_SUCCESS,
    payload:itemCategoryData,
  });
  export const getItemSubCategory = (itemId) => ({
    type: GET_ITEM_SUB_CATEGORY,
    itemId,
  });
  export const getItemSubCategorySuccess = (itemSubCategory) => ({
    type: GET_ITEM_SUB_CATEGORY_SUCCESS,
    payload:itemSubCategory,
  })