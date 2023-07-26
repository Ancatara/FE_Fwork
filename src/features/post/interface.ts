import { ICategory } from "interfaces/category";
import { POST_STATE } from "interfaces/enum";
import { IUserPost } from "interfaces/user";

export interface IPostDetail {
  _id: string;
  title: string;
  image?: string|null;
  content: string;
  address: string;
  salary: number;
  startDate: string;
  status: POST_STATE;
  duration: number;
  createdAt:string;
  updatedAt:string;
  CategoryId: string;
  UserId: string;
  User:IUserPost;
  Category:ICategory
}
