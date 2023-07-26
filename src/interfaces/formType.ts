export interface RegisterFormType{
  firstName:string,
  lastName:string,
  phone:string,
  email:string,
  password:string,
  confirmPassword:string,
  agree:boolean,
  role:string
}
export interface CreatePostFormType{
  title:string,
  content:string,
  address:string,
  salary:number,
  startDate:Date,
  duration:number,
  CategoryId:string,
  image:any
}