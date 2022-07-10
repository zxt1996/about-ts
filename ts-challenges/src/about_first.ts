// First<T>用来返回数组的第一个元素

// 索引实现方式
// T extends []：用来判断T是否是一个空数组
type First<T extends any[]> = T extends [] ? never : T[0];

// 占位实现方式
// infer R： 表示数组第一个元素的占位。
// ...infer L: 表示数组剩余元素的占位
type FirstTwo<T extends any[]> = T extends [infer R, ...infer L] ? R : never;

// 结果：3
type result1 = First<[3, 2, 1]>
// 结果：never
type result2 = First<[]>