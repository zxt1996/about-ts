// Length<T>用来获取一个数组(包括类数组)的长度
// T extends { length: number; }：判断T是否是{ length: number; }的子类型，如果是则代表T为数组或者类数组
// T['length']：取T对象的length属性的值(注意，在TypeScript中不能使用T.length来取值，而应该使用T['length'])
type Length<T extends any> = T extends { length: number } ? T['length'] : never

// 结果：3
type result1 = Length<[1, 2, 3]>
// 结果：10
type result2 = Length<{ 5: '5', length: 10 }>