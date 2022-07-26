// CamelCase是用来将连字符字符串转驼峰的

type CamelCase<
    S extends string
> = S extends `${infer S1}-${infer S2}`
        ? S2 extends Capatilize<S2>
            ? `${S1}-${CamelCase<S2>}`
            : `${S1}${CamelCase<Capatilize<S2>>}`
        : S

// 结果：fooBarBaz
type result = CamelCase<'foo-bar-baz'>

// 第一次递归调用 S满足${infer S1}-${infer S2} S2不满足extends Capitalize<S2>
// S = 'foo-bar-baz' S1 = 'foo' S2 = 'bar-baz'

// 第二次递归调用 S满足${infer S1}-${infer S2} S2不满足extends Capitalize<S2>
// S = 'Bar-baz' S1 = 'Bar' S2 = 'baz'

// 第三次递归调用 S不满足${infer S1}-${infer S2}
// S = 'Baz'

// 结果：fooBarBaz
// type result = 'foo' + 'Bar' + 'Baz' => 'fooBarBaz'