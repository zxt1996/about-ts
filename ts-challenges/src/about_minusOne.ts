// MinusOne是用来实现数字减一的

// 在实现MinusOne的时候，借用了一个空数组，首先判断数组的长度是否等于传递的数字N，如果相等则从数组中随意移除一位，然后返回剩下数组的长度即可；
// 如果不相等，则往数组中添加一个元素，再递归调用MinusOne。
// 注意：由于TS在递归调用时存在最大递归调用次数，所以对于比较大的数字会提示错误。
type MinusOne<
    N extends number,
    T extends any[] = []
> = N extends T['length']
    ? T extends [infer F, ...infer Rest]
     ? Rest['length']
     : never
    : MinusOne<N, [0, ...T]>

// 结果：99
type result = MinusOne<100>