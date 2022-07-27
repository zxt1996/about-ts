// Diff是用来获取两个类型的不同部分的

type DiffKeys<T, U> = Exclude<keyof T, keyof U> | Exclude<keyof U, keyof T>
type Diff<T, U> = {
    [k in DiffKeys<T, U>]: k extends keyof T ? T[k] : k extends keyof U ? U[k] : never
}

type Foo = {
    id: number;
    name: string;
    age: string;
  }
  type Bar = {
    name: string;
    age: string;
    gender: number;
  }
  
  // 结果：{ id: number; gender: number; }
  type result = Diff<Foo, Bar>