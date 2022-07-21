// ReplaceAll是用来将字符串中指定字符全部替换的

type ReplaceAll<
    S extends string,
    from extends string,
    to extends string
> = S extends `${infer L}${from}${infer R}`
        ? from extends ''
            ? S
            : `${ReplaceAll<L, from, to>}${to}${ReplaceAll<R, from, to>}`
        : S

// 结果：'foofoofoo'
type t = ReplaceAll<'foobarbar', 'bar', 'foo'> 