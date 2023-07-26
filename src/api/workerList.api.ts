import { UserInfo, UserInfos } from "interfaces";
import { http } from "utils/http";
import { getBearerAccessToken } from "utils/localStorage/LocalStorage";

export  const getWorkerList = async() =>{
  return await http.get(`/user`, {
    // headers: {Authorization: getBearerAccessToken()}
})
}

// export const updateUserProfile = async (profile: Partial<UserInfo>) => {
//   try {
//     return await http.put<UserInfo>(`/user/profile`, profile, {
//       headers: { Authorization: getBearerAccessToken() },
//     });
//   } catch (error) {
//     // Handle error
//     throw error;
//   }
// };