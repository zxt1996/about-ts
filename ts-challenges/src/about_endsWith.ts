type EndsWith<
    S extends string,
    C extends string
> = S extends `${string}${C}` ? true : false

// 结果：true
type result = endsWith<'abc', 'bc'>