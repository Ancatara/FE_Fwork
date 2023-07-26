import { UserInfo, UserInfos } from "interfaces";
import { http } from "utils/http";
import { getBearerAccessToken } from "utils/localStorage/LocalStorage";

export  const getUserProfile = async() =>{
  return await http.get<UserInfos>(`/user/profile`, {
    headers: {Authorization: getBearerAccessToken()}
})
}

export  const getCategory = async() =>{
  return await http.get<any>(`/category`, {
    headers: {Authorization: getBearerAccessToken()}
})
}

export const updateUserProfile = async (profile: Partial<UserInfo>) => {
  try {
    return await http.put<UserInfo>(`/user/profile`, profile, {
      headers: { Authorization: getBearerAccessToken() },
    });
  } catch (error) {
    // Handle error
    throw error;
  }
};
