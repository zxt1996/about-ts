// Exclude是排除的意思，它从T类型中排除属于U类型的子集
type ExcludeResult = Exclude<'name'|'age'|'sex', 'sex'|'address'>; // 结果：'name'|'age'

type MyExclude<T, U> = T extends U ? never : T;

// T extends U 
// => 'name'|'age'|'sex' extends 'sex'|'address'
// => (
//   'name' extends 'sex'|'address' ? never : 'name' |
//   'age' extends 'sex'|'address' ? never : 'age' |
//   'sex' extends 'sex'|'address' ? never : 'sex'
// )
// => 'name'|'age'