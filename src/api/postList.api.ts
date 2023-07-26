import { http } from "utils/http";
import { getBearerAccessToken } from "utils/localStorage/LocalStorage";

export  const getPostDetail = async() =>{
  return await http.get<any>(`/post`, {
    headers: {Authorization: getBearerAccessToken()}
})
}

export  const getCategory = async() =>{
  return await http.get<any>(`/category`, {
    headers: {Authorization: getBearerAccessToken()}
})
}

export  const getPostList = async() =>{
  return await http.get<any>(`/category`, {
    headers: {Authorization: getBearerAccessToken()}
})
}
