type StringToArray<
    S extends string,
    U extends any[] = []
> = S extends `${infer Char}${infer R}`
        ? StringToArray<R, [...U, Char]>
        : U

// 结果：['h', 'e', 'l', 'l', 'o']
type result = StringToArray<'hello'>