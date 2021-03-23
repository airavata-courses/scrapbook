import { User } from '../models/user.model';

export class GoogleLogin {
  static readonly type = '[LOGIN] GOOGLE';
}

export class PutUserInSession {
  static readonly type = 'PUT USER IN SESSION';
  constructor(public user: User) {}
}

export class Logout {
  static readonly type = 'LOGOUT';
  constructor() {}
}

export class FetchUserData {
  static readonly type = '[FETCH] User Data';
  constructor(public email: string) {}
}

export class SearchUserBySubstring {
  static readonly type = '[SEARCH] User by substring';
  constructor(public sub: string) {}
}

export class RemoveSearchedUserBySubString {
  static readonly type = '[REMOVE] User by substring';
  constructor() {}
}

export class SignUp {
  static readonly type = '[SIGNUP]';
  constructor(public email: string, public password: string, public name: string) {}
}

export class CustomLogin {
  static readonly type = '[Custom] Login';
  constructor(public email: string, public password: string) {}
}

export class GetHistory {
  static readonly type = '[GET] History';
  constructor() {}
}