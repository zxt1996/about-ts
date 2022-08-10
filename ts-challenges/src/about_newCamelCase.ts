// CamelCase是用来将下划线字符串转小驼峰的

type CamelCaseTwo<
    S extends string
> = S extends `${infer left}_${infer char}${infer right}`
    ? `${Lowercase<left>}${Uppercase<char>}${CamelCase<right>}`
    : Lowercase<S>

// 结果：'fooBarHelloWorld'
type result = CamelCase<'foo_bar_hello_world'>