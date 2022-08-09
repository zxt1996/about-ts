
type UnionToIntersection<U> = 
    (U extends any
        ? (x: U) => any
        : never
    ) extends (x: infer V) => any
        ? V
        : never

// UnionToIntersection<'a' | 'b>
// ((args: 'a') => any | (args: 'b') => any) extends (args: infer R) => any ? R : never
// ((args: 'a') => any extends (args: infer R) => any ? R : never) | ((args: 'b') => any extends (args: infer R) => any ? R : never)
// R 是从一个逆变位置 inferred，即最后结果 'a' 和 'b' 交叉类型
// 'a' & 'b'


// 结果：never
type result1 = UnionToIntersection<1 | 'foo' | true>
// 结果：{ a: number; b: number; c: boolean; }
type result2 = UnionToIntersection<{ a: number; b: number; } | { b: string | number; c: boolean; }>
// 结果：(a: boolean | number) => string
type result3 = UnionToIntersection<((a: boolean) => string | number) | ((a: number) => string)>
