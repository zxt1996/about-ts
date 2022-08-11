// FilterOut是用来从数组中移除指定元素的

type FilterOut<
    T extends any[],
    F,
    K extends any[] = []
> = T extends [infer R, ...infer args]
    ? [R] extends [F]
        ? FilterOut<args, F, [...K]>
        : FilterOut<args, F, [...K, R]>
    : K
    
// 结果：[2]
type result = FilterOut<[1, 'a', 2], 'a' | 1>