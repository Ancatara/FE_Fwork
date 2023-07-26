import axios from "axios";
import { IPost } from "interfaces";
import { axiosRequest } from "utils/axiosRequest";
import { getBearerAccessToken } from "utils/localStorage/LocalStorage";

const url = process.env.REACT_APP_BACKEND_URL;
const factories = {
  getPostById:(id:string)=>{
    return axiosRequest({
      method:"get",
      url:`/post/${id}`,
    })
  },
}
export default factories;