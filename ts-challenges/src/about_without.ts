// Without是用来从数组中移除指定元素的

// 统一处理成联合类型
type ToUnion<T> = T extends any[] ? T[number] : T
type Without<
    T extends any[],
    F,
    U = ToUnion<F>,
    R extends any[] = []
> = T extends [infer First, ...infer Rest]
    ? First extends U
        ? Without<Rest, F, U, [...R]>
        : Without<Rest, F, U, [...R, First]>
    : R


type Res = Without<[1, 2], 1> // expected to be [2]
type Res1 = Without<[1, 2, 4, 1, 5], [1, 2]> // expected to be [4, 5]
type Res2 = Without<[2, 3, 2, 3, 2, 3, 2, 3], [2, 3]> // expected to be []