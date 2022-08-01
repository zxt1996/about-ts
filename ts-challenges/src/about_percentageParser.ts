// PercentageParser是用来解析百分比字符串

type CheckPrefix<S extends string> = S extends '+' | '-' ? S : never
type CheckSuffix<S extends string> = S extends `${infer L}%` ? [L, '%'] : [S, '']

type PercentageParser<S extends string> = 
    S extends `${CheckPrefix<infer L>}${infer R}`
        ? [L, ...CheckSuffix<R>]
        : ['', ...CheckSuffix<S>]

type result1 = PercentageParser<'+85%'> // ['+', '85', '%']
type result2 = PercentageParser<'-85%'> // ['-', '85', '%']
type result3 = PercentageParser<'85'>   // ['', '85', '']