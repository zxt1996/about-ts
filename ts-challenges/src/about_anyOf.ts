// AnyOf用来判断数组元素，如果任意值为真，返回true；数组为空或者全部为false，才返回false

type FalseType = 0 | '' | false | [] | { [ket: string]: never }
// 使用T[number]索引迭代
type AnyOf<T extends readonly any[]> = T[number] extends FalseType ? false : true

// 结果：true
type result1 = AnyOf<[0, false, 0, { name: 'name' }]>
// 结果：false
type result2 = AnyOf<[0, '', false, [], {}]>