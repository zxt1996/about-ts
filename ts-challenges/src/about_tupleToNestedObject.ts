// TupleToNestedObject是用来将元组转成嵌套对象的

type TupleToNestedObject<T extends any[], U> = 
    T extends [infer F, ...infer R]
        ? F extends string
            ? { [P in F]: TupleToNestedObject<R, U> }
            : never
        : U

// 结果：{ a: { b: string; } }
type result = TupleToNestedObject<['a', 'b'], string>