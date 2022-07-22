// LengthOfString是用来计算一个字符串长度的

type LengthOfString<
    S extends string,
    T extends string[] = []
> = S extends `${infer Char}${infer R}`
        ? LengthOfString<R, [...T, Char]>
        : T['length']

type result = LengthOfString<'Hello'> // 5

// 第一次递归
const T = ['H'], S = 'hello', R = 'ello'
// 第二次递归
const T = ['H','e'], S = 'ello', R = 'llo'
// 第三次递归
const T = ['H','e','l'], S = 'llo', R = 'lo'
// 第四次递归
const T = ['H','e','l','l'], S = 'lo', R = 'o'
// 第五次递归
const T = ['H','e','l','l', 'o'], S = 'o', R = ''