import axios from "axios"
import accessToken from "./jwt-token-access/accessToken"

//pass new generated access token here
const token = accessToken

//apply base url for axios0
const API_URL = "http://web.chitalebandhu.in:8080/FoodERPBackEND/api"
const API_URL1 = "http://127.0.0.1:8000"


const axiosApi = axios.create({
  baseURL: API_URL,
})
const axiosApi1=axios.create({
  baseURL: API_URL1,
})

axiosApi.defaults.headers.common["Authorization"] = token

axiosApi.interceptors.response.use(
  response => response,
  error => Promise.reject(error)
)

export async function get(url, config = {}) {
  return await axiosApi.get(url, { ...config }).then(response => response.data)
}

export async function getModify(url) {
  return await axiosApi.get(url).then(response => response.data)
}

export async function post(url, data, config = {}) {
  return axiosApi
    .post(url,data,{
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json",}
    })
    .then(response => response.data)
}


export async function put(url, data, config = {}) {
  return axiosApi
    .put(url, data, {  headers: {
      "Accept": "application/json",
      "Content-Type": "application/json",}
  })
    .then(response => response.data)
}

export async function del(url, config = {}) {
  return await axiosApi
    .delete(url, { ...config })
    .then(response => response.data)
}


export async function get1(url, config = {}) {
  return await axiosApi1.get(url, { ...config }).then(response => response.data.data)
  }
  
  export async function post1(url, data, config = {}) {
    return axiosApi1
      .post(url,data, { ...config })
      .then(response => response.data)
  }
  
  export async function put1(url, data, config = {}) {
    return axiosApi1
      .put(url, { ...data }, { ...config })
      .then(response => response.data)
  }
  
  export async function del1(url, config = {}) {
    return await axiosApi1
      .delete(url, { ...config })
      .then(response => response.data)
  }
  