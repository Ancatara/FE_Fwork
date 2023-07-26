import axios from "axios";
import { ILogin, UserInfo } from "interfaces";
import { axiosRequest } from "utils/axiosRequest";

const url = process.env.REACT_APP_BACKEND_URL;
const factories = {
  requestLogin:(data:ILogin)=>{
    return axios({
      method:"post",
      url:`${url}/auth/login`,
      data:data,
    })
  },
  requestUserInfo:()=>{
    return axiosRequest({
      method:"get",
      url:`/user/profile` 
    })
  }
}
export default factories;