import { GET_PAGES_FAIL, GET_PAGES_SUCCESS } from "./actionType";
const INIT_STATE = {
    pages: {data:[]},
    error: {},
}
const Pages = (state = INIT_STATE, action) => {
    switch (action.type) {
        case GET_PAGES_SUCCESS:
            return {
                ...state,
                pages: action.payload,
            }
        case GET_PAGES_FAIL:
            return {
                ...state,
                error: action.payload,
            }
        default: return state
    }
}

export default Pages