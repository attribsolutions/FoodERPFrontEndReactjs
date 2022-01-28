import { GET_PAGES, GET_PAGES_FAIL, GET_PAGES_SUCCESS } from './actionType'

export const getPages = () => ({
    type: GET_PAGES
})

export const getpagesSuccess = pages => ({
    type: GET_PAGES_SUCCESS,
    payload: pages,
})

export const getpagesError = error => ({
    type: GET_PAGES_FAIL,
    payload: error
})