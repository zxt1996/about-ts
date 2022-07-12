type Push<T extends any[], K> = [...T, K];

// 结果：[1, 2, 3, 4]
type result = Push<[1, 2, 3], 4>