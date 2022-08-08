// IndexOf是用来实现数组indexOf方法的

type IndexOf<
    T extends any[],
    U,
    Index extends any[] = []
> = T extends [infer First, ...infer Rest]
    ? First extends U
        ? Index['length']
        : IndexOf<Rest, U, [...Index, 0]>
    : -1

// 结果：2
type result = IndexOf<[1, 2, 3, 4], 3>