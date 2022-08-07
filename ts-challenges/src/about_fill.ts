
type Fill<
    T extends any[],
    U
> = T extends [any, ...infer Rest]
    ? [U, ...Fill<Rest, U>]
    : []

// 解雇：[true, true, true]
type result = Fill<[1, 2, 3], true>