import { BaseModel } from "../base/base.model";

export interface User extends BaseModel {
  emailAddress: string;
  name: string;
  gender: string;
  sleepTimeDuration: number;
}

export interface UserDTO {
  emailAddress: string;
  name: string;
  gender: string;
  sleepTimeDuration: number;
}