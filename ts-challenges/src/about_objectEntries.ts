// ObjectEntries是用来实现JavaScript中的Object.entries()方法

// 借助U类型，然后对其Required是为了去掉可选类型，U[keyof U]表示取出U中键的类型组成的联合类型
type ObjectEntries<T, U = Required<T>> = {
    [P in keyof U]: [P, U[P]]
}[keyof U]

interface Model {
    name: string;
    age: number;
    locations?: string[] | null;
  }
  type ModelEntries = ['name', string] | ['age', number] | ['locations', string[] | null];
  
  // 结果：ModelEntries
  type result = ObjectEntries<Model>