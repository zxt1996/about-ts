// Omit是移除的意思，它用来在T类型中移除指定的字段

type MyPick<T, K extends keyof T> = {
    [P in K]: T[P]
}

type MyExclude<T, U> = T extends U ? never : T;

type MyOmit<T, K> = MyPick<T, MyExclude<keyof T, K>>

type Person = {
    name?: string;
    age: number;
    address: string;
  }
  
  // 结果：{ name？: string; age: number; }
  type OmitResult = Omit<Person, 'address'>