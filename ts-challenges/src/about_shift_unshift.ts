type Shift<T extends any[]> = T extends [infer F, ...infer R] ? R : never;

type Unshift<T extends any[], K> = [K, ...T];

// Shift结果：[2, 3]
type shiftResult = Shift<[1, 2, 3]>

// Unshift结果：[0, 1, 2, 3]
type unshiftResult = Unshift<[1, 2, 3], 0>