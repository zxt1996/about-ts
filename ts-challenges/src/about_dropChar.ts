// DropChar是用来在字符串中移除指定字符的

type DropChar<
    S extends string,
    C extends string
> = C extends ''
    ? S
    : S extends `${infer L}${C}${infer R}`
        ? DropChar<`${L}${R}`, C>
        : S

// 结果：butterfly!
type result = DropChar<' b u t t e r f l y ! ', ' '>