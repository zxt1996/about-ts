// RequiredByKeys是用来实现按需必填的

type CopyKeys<T> = {
    [P in keyof T]: T[P]
}

type RequiredByKeys<
    T,
    K extends keyof any = keyof T
> = CopyKeys<Required<Pick<T, Extract<keyof T, K>>> & Omit<T, K>>

interface User {
    name?: string
    age?: number
    address?: string
  }
  
  interface UserRequiredName {
    name: string
    age?: number
    address?: string 
  }
  
  // 结果：UserRequiredName
  type result = RequiredByKeys<User, 'name'>