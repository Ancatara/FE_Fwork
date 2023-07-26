import { UserInfo, UserInfos } from "interfaces";
import { http } from "utils/http";
import axios from "axios";
import { getBearerAccessToken } from "utils/localStorage/LocalStorage";

export const apiGetProvinces = () => new Promise(async (resolve, reject) => {
  try {
      const response = await axios({
          method: 'get',
          url: '/api/v1/province/all'
      })
      resolve(response)
  } catch (error) {
      reject(error)
  }
})
export const apiGetPublicProvinces = () => new Promise(async (resolve, reject) => {
  try {
      const response = await axios({
          method: 'get',
          url: 'https://vapi.vnappmob.com/api/province/'
      })
      resolve(response)
  } catch (error) {
      reject(error)
  }
})
export const apiGetPublicDistrict = (provinceId) => new Promise(async (resolve, reject) => {
  try {
      const response = await axios({
          method: 'get',
          url: `https://vapi.vnappmob.com/api/province/district/${provinceId}`
      })
      resolve(response)
  } catch (error) {
      reject(error)
  }
})