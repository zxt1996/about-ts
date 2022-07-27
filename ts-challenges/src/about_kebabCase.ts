// 将驼峰形式字符串，转成连字符形式字符串的

type KebabCase<
    S extends string
> = S extends `${infer S1}${infer S2}`
        ? S2 extends Uncapatilize<S2>
            ? `${Uncapatilize<S1>}${KebabCase<S2>}`
            : `${Uncapatilize<S1>}-${KebabCase<S2>}`
        : S

// 结果：foo-bar-baz
type result = KebabCase<'FooBarBaz'>