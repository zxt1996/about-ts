// Zip是用来将两个元组按照相同索引位置组合成一个新数组的

type Zip<
    T extends readonly any[],
    U extends readonly any[]
> = T extends [infer First, ...infer Rest]
    ? U extends [infer Head, ...infer Tail]
        ? [[First, Head], ...Zip<Rest, Tail>]
        : []
    : []

// 结果：[[1, true], [2, false]]
type result = Zip<[1, 2], [true, false]>