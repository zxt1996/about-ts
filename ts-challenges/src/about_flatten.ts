// Flatten是用来将多维数组进行降维

type Flatten<
    T extends any[]
> = T extends [infer L, ...infer R]
        ? L extends any[]
            ? [...Flatten<L>, ...Flatten<R>]
            : [L, ...Flatten<R>]
        : []

// 结果：[1, 2, 3]
type result = Flatten<[1, 2, [3]]>