import { IPaging, UserInfo } from "interfaces";
import { USER_EXPERIENCE, USER_STATUS } from "interfaces/enum";

export interface UserState {
  isLoading: boolean;
  error: string | null;
  userDetail: IUserResponse|null;
  userList: IUserResponse[];
}
export interface IUserResponse extends UserInfo{

}
export interface IUserListFilter extends IPaging{
  categoryId?: string;
  address?: string;
  salary?: number;
  experience?: USER_EXPERIENCE;
  status?: USER_STATUS;
}

