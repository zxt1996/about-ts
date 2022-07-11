// Concat<T, U>用来将两个数组合并起来，类似实现数组的concat方法
type Concat<T extends any[], U extends any[]> = [...T, ...U];

type ConcatTwo<P, Q> = [
    ...P extends any[] ? P : [P],
    ...Q extends any[] ? Q : [Q],
]

// 结果：[1, 2, 3, 4]
type result = Concat<[1, 2], [3, 4]>