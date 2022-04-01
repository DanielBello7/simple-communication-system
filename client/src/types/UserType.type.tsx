

export type UserType = {
  email: string,
  password: string,
  bio: string,
  first_name: string,
  last_name: string
}

export type UpdateType = {
  firstname: string, 
  lastname: string, 
  bio: string
}

export type UserContextType = {
  user: UserType | null,
  LoginUser: Function,
  LogoutUser: Function,
  createAccount: Function,
  UpdateUserInfo: (data: UpdateType) => void
}

export type UserData = {
  first_name: string,
  last_name: string,
  email: string,
  password: string
}