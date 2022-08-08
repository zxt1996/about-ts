// Unique是用来实现数组去重的

type Unique<
    T extends any[],
    R extends any[] = []
> = T extends [infer First, ...infer Rest]
    ? First extends R[number]
        ? Unique<Rest, [...R]>
        : Unique<Rest, [...R, First]>
    : R

// 结果：[1, 2, 3]
type result = Unique<[1, 1, 2, 2, 3, 3]>