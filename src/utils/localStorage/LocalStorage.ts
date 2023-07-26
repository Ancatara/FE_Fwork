export const getUserIdLocalstorage = ()=>{
  return localStorage.getItem("user_id")
}

export const getBearerAccessToken = ()=>{
  return localStorage.getItem("access_token")
}

