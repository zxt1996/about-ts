// ReplaceKeys是用来在一个类型中，使用指定的Y类型来替换已经存在的T类型的

type ReplaceKeys<U, T, Y> = {
    [P in keyof U]:
        P extends T
            ? P extends keyof Y
                ? Y[P]
                : never
            : U[P]
}

// 结果：{ id: number; name: boolean; }
type result = ReplaceKeys<{ id: number; name: string; }, 'name', { name: boolean; }>