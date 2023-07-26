import axios from "axios";
import { IPost } from "interfaces";
import { axiosRequest } from "utils/axiosRequest";
import { getBearerAccessToken } from "utils/localStorage/LocalStorage";
import { IUserListFilter } from "./interface";

const url = process.env.REACT_APP_BACKEND_URL;
const factories = {
  getUserById:(id:string)=>{
    return axiosRequest({
      method:"get",
      url:`/user/${id}`,
    })
  },
  getListWorker:(data:IUserListFilter)=>{
    return axiosRequest({
      method:"get",
      url:`/user`,
      params:data
    })
  },
}
export default factories;