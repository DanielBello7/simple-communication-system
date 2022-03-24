

export type UserType = {
  email: string,
  password: string,
  bio: string,
  first_name: string,
  last_name: string
}

export type UserContextType = {
  user: UserType | null,
  LoginUser: Function,
  LogoutUser: Function,
  createAccount: Function
}

export type UserData = {
  first_name: string,
  last_name: string,
  email: string,
  password: string
}