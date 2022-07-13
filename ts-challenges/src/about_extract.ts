// Extract<T, U>用来取联合类型T和U的交集

// T extends U：此代码会自动将T的子类型进行分发
type MyExtract<T, U> = T extends U ? T : never;

type Person = {
    name: string;
    age: number;
    address: string;
  }
  
  // 结果：'age'|'address'
  type ExtractResult = Extract<keyof Person, 'age'|'address'|'sex'>

//   T extends U
// => 'name'|'age'|'address' extends 'age'|'address'|'sex' ? T : never
// => (
//   'name' extends 'age'|'address'|'sex' ? 'name' : never |
//   'age' extends 'age'|'address'|'sex' ? 'age' : never |
//   'address' extends 'age'|'address'|'address' ? 'age' : never
// )
// => 'age'|'address'