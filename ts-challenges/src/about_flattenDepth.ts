// FlattenDepth是用来按深度进行数组降维的

/*
第一个参数 T：需要处理的数组
第二个参数 C：进行扁平处理的层级，默认值为 1
第三个参数 U：辅助参数，是个数组，该数组的长度等于 C 时，就代表当前迭代值扁平处理完成
*/
type FlattenDepth<
    T extends any[],
    D extends number = 1,
    U extends any[] = []
> = T extends [infer F, ...infer R]
    ? U['length'] extends D  // 如果能匹配上 U['length'] extends D 说明递归深度已达到
        ? T
        : F extends any[]
            ? [...FlattenDepth<F, D, [0, ...U]>, ...FlattenDepth<R, D>]
            : [F, ...FlattenDepth<R, D, U>]
    : T


type a = FlattenDepth<[1, 2, [3, 4], [[[5]]]], 2> // [1, 2, 3, 4, [5]] 扁平层级为 2
type b = FlattenDepth<[1, 2, [3, 4], [[[5]]]]> // [1, 2, 3, 4, [[5]]] 扁平层级为 1
