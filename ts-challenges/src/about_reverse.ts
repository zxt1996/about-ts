type Reverse<T extends any[]> = 
    T extends [...infer R, infer L]
        ? [L, ...Reverse<R>]
        : []

// 结果：['b', 'a']
type result = Reverse<['a', 'b']>