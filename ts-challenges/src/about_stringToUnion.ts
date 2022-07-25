// 递归实现
type StringToUnion<
    S extends string
> = S extends `${infer Char}${infer R}`
        ? Char | StringToUnion<R>
        : never


// 借用 StringToArray
// T[number]表示对一个数组进行数字类型索引迭代，其迭代结果是每个元素组合成的一个联合类型
type StringToUnionTwo<S extends string> = StringToArray<S>[number]

// 结果：'h' | 'e' | 'l' | 'l' | 'o'
type result = StringToUnion<'hello'>