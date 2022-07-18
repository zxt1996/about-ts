type Pop<T extends any[]> = 
    T extends []
        ? []
        : T extends [...infer Rest, infer L]
            ? Rest
            : never

// 结果：[1, 2]
type result = Pop<[1, 2, 3]>