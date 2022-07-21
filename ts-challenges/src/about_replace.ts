// Replace是用来将字符串中第一次出现的某段内容，使用指定的字符串进行替换

type Replace<
    S extends string,
    from extends string,
    to extends string
> = S extends `${infer L}${from}${infer R}`
        ? from extends ''
            ? S
            : `${L}${to}${R}`
        : S

// 结果：'foofoobar'
type t = Replace<'foobarbar', 'bar', 'foo'>        