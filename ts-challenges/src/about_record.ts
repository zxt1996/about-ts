// Record<K, T>用来将K的每一个键(k)指定为T类型，这样由多个k/T组合成了一个新的类型

// k extends keyof any：此代码表示K是keyof any任意类型其所有键的子类型
type MyRecord<K extends keyof any, T> = {
    [P in K]: T
}

type keys = 'Cat'|'Dot'
type Animal = {
  name: string;
  age: number;
}
type Expected = {
  Cat: {
    name: string;
    age: number;
  };
  Dog: {
    name: string;
    age: number;
  }
}

// 结果：Expected
type RecordResult = Record<keys, Animal>

// K为 'Dog'|'cat'
type UnionKeys = 'Dog' | 'Cat'

// K为'name'|'age'
type Person = {
  name: string;
  age: number;
}