// FlipArguments是用来实现函数参数反转的

type FlipArguments<T> = 
    T extends (...args: infer A) => infer R
        ? (...args: Reverse<A>) => R
        : never

// 结果：(a: number, b: string) => string | number
type result = FlipArguments<(a: string, b: number) => string | number>