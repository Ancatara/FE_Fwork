import { ROLE, USER_EXPERIENCE, USER_STATUS } from "./enum";

export interface ILogin {
  phone?: string,
  email?: string;
  password: string;
}
export interface profileUpdate{
  _id: string,
  salary: number
}
export interface UserInfo {
  _id: string;
  firstName: string;
  lastName: string;
  phone: string;
  email: string;
  birthday: string | null;
  address: string | null;
  avatar: string|null;
  gender: number|null;
  salary: number|null;
  description: string|null;
  experience: USER_EXPERIENCE;
  status: USER_STATUS;
  is_public: boolean;
  role: ROLE;
  wallet: number;
  createdAt: string;
  updatedAt: string;
  CategoryId: string|null;
}

export interface IPost {
  CategoryId:string,
  title: string
  content: string,
  startDate: any,
  duration: any,
  salary: number,
  address: string,
  image?: File | string | null
}
export interface IPaging{
  page:number,
  limit:number
}

export type UserInfos = Pick<UserInfo, "_id" | "address" | "gender" | "is_public" | "phone" | "avatar" | "salary" | "description" | "experience" | "email" | "lastName"| "firstName"| "CategoryId">[];

export type UserInfoUpdate = Pick<UserInfo,"address" | "gender" | "phone" | "avatar" | "salary" | "description" | "experience" | "email" | "lastName"| "firstName">;
