// Last是用来获取数组中最后一个元素的

// T extends [...infer R, infer L]：这段代码表示，我们将原数组中最后一个元素使用L进行占位，而其它元素我们用一个R数组表示
type Last<T extends any[]> = T extends [...infer R, infer L] ? L : never;

// 结果：3
type result = Last<[1, 2, 3]>