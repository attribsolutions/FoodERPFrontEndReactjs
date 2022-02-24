
import {
    GET_DEMO_API,
    GET_DEMO_API_SUCCESS,
} from "./actionTypes"


export const getDemoApi = () => ({
    type: GET_DEMO_API,
});

export const getDemoApiSuccess = (demoData) => ({
    type: GET_DEMO_API_SUCCESS,
    payload:demoData
});


































