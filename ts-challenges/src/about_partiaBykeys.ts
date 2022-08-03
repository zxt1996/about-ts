// PartialByKeys是用来实现按需可选的

type CopyKeys<T> = {
    [P in keyof T]: T[P]
}

// Pick部分：首先取keyof T和K的交集，然后使用Pick从T中选取交集的key组成一个新类型，最后给新类型添加可选
// Omit<T, K>表示从T中剔除含有K的类型
// CopyKeys部分：如果不使用CopyKeys，最后的结果为T & U形式，它实际上与使用CopyKeys的结果是一样的。这里使用CopyKeys，很大程度上是为了测试
type PartialByKeys<
    T,
    K extends keyof any = keyof T
> = CopyKeys<Partial<Pick<T, Extract<keyof T, K>>> & Omit<T, K>>

// 使用CopyKeys，结果为true；不使用，结果为false
type result1 = Equal<PartialByKeys<User, 'name'>, UserPartialName>

interface User {
    name: string
    age: number
    address: string
  }
  interface UserPartialName {
    name?: string,
    age: number
    address: string 
  }
  
  // 结果：UserPartialName
  type result = PartialByKeys<User, 'name'>