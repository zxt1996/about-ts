// IsNever是用来判断是否为never类型

type IsNever<T> = T[] extends never[] ? true : false

// 结果：false
type result1 = IsNever<undefined>
// 结果：true
type result2 = IsNever<never>