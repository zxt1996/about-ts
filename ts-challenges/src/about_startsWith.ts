type StartsWith<
    S extends string,
    C extends string
> = S extends `${C}${string}` ? true : false

// 结果：true
type result = StartsWith<'abc', 'ab'>