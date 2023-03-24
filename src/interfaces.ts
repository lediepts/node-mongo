import { Request, Response } from "express";
import * as core from "express-serve-static-core";

export interface TokenInfo {
  info: User;
  permissions: string[];
}

export interface ServiceRequest<
  P = core.ParamsDictionary,
  ResBody = any,
  ReqBody = any,
  ReqQuery = core.Query,
  Locals extends Record<string, any> = Record<string, any>
> extends Request<P, ResBody, ReqBody, ReqQuery, Locals> {
  loginInfo?: TokenInfo;
}
export interface ServiceResponse extends Response {}

export interface User {
  id: number;
  firstName: string;
  lastName: string;
  firstKana: string;
  lastKana: string;
  tel: string;
  status: "init" | "active" | "deleted";
}

export interface Auth {
  id: number;
  userId: number;
  userName: string;
  password: string;
  passcode: string;
  lockStill: number;
  updatedAt?: string;
}

export interface PWHistory {
  id: number;
  authId: number;
  password: string;
}

export interface LoginHistory {
  id: number;
  authId: number;
  type: string;
  ip: string;
  success: number;
  createdAt?: string;
  updatedAt?: string;
}
