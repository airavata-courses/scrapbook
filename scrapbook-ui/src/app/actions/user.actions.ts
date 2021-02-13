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