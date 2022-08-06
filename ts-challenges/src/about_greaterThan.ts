// GreaterThan<T, N>是来用判断正整数T是否大于正整数N的

// 使用一个空数组来辅助，每次递归添加一个元素，如果正整数T先等于这个数组的长度，则为false；如果正整数N先等于这个数组的长度，则为true
type GreaterThan<
    T extends Number,
    N extends Number,
    R extends any[] = []
> = T extends R['length']
    ? false
    : N extends R['length']
        ? true
        : GreaterThan<T, N, [...R, 0]>

// 结果：true
type result = GreaterThan<2, 1>