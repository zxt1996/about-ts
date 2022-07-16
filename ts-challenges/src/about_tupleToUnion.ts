// TupleToUnion是用来将一个元组转换成联合类型的

// T[number]：它会自动迭代元组的数字型索引，然后将所以元素组合成一个联合类型。
type TunpleToUnion<T extends readonly any[]> = T[number];

// 递归
type TunpleToUnionTwo<T extends readonly any[]> = 
    T extends [infer R, ...infer args]
        ? R | TunpleToUnionTwo<args>
        : never;

// 结果：'1' | '2' | '3'
type result = TupleToUnion<['1', '2', '3']>