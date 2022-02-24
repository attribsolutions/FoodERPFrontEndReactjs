import { GET_DEMO_API_SUCCESS } from "./actionTypes"

const INIT_STATE = {
    demoData:[],
}

const demo = (state = INIT_STATE, action) => {
    switch (action.type) {
        case GET_DEMO_API_SUCCESS:
            return {
              ...state,
              demoData: action.payload,
            }
            default:
                return state
        }
}
export default demo ;