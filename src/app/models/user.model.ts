import * as BaseInterface from "./base.model";

export interface ILoginRequest{
  Username: string;
  Password: string;
}

export interface ILoginResponse extends BaseInterface.IBaseResponse {
  Username: string;
  Name: string;
  CenterID: number;
  CenterName: string;
  CenterTypeCode: string;
  AccessID: number;
  TenantID: number;
  Tenant: string;
  AuthToken: string;
}

export interface ILogoutRequest extends BaseInterface.IBaseRequest {
  AccessID: number;
}

export interface ILogoutResponse extends BaseInterface.IBaseResponse {
}

export interface IForgotPasswordRequest extends BaseInterface.IBaseRequest {
  Username: string;
}

export interface IForgotPasswordResponse extends BaseInterface.IBaseResponse {
}
