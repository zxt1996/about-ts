// ParsePrintFormat是用来获取字符串格式化参数的

type ControlMap = {
    'c': 'char',
    's': 'string',
    'd': 'dec',
    'o': 'oct',
    'h': 'hex',
    'f': 'float',
    'p': 'pointer'
}

type ParsePrintFormat<
    S extends string,
    R extends string[] = []
> = S extends `${infer S1}%${infer Char}${infer S2}`
    ? Char extends keyof ControlMap
        ? ParsePrintFormat<S2, [...R, ControlMap[Char]]>
        : ParsePrintFormat<S2, R>
    : R

// 结果：['string', 'dec']
type result = ParsePrintFormat<'Hello %s: score is %d'>