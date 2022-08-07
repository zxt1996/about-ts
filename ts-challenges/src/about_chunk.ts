// 将一个数组分割成长度为N的多个小数组

// 借助一个辅助空数组，在遍历数组时往这个辅助数组中添加元素，一直到等于指定长度，然后进行下一次相同操作
type Chunk<
    T extends any[],
    Size extends number,
    R extends any[] = []
> = R['length'] extends Size
    ? [R, ...Chunk<T, Size>]
    : T extends [infer F, ...infer L]
        ? Chunk<L, Size, [...R, F]>
        : R['length'] extends 0
            ? []
            : [R]

type exp1 = Chunk<[1, 2, 3], 2> // expected to be [[1, 2], [3]]
type exp2 = Chunk<[1, 2, 3], 4> // expected to be [[1, 2, 3]]
type exp3 = Chunk<[1, 2, 3], 1> // expected to be [[1], [2], [3]]