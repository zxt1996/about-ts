// CapitalizeWords是用来把一个字符串中所有单词，变为大写字母的，其中这个字符串以固定的分隔符分割

type CapitalizeWords<
    S extends string,
    R extends string = ''
> = S extends `${infer left}${infer split}${infer right}`
    ? split extends ' ' | '.' | ','
        ? CapitalizeWords<Capatilize<right>, `${R}${left}${split}`>
        : CapitalizeWords<right, `${R}${left}${split}`>
    : Capatilize<`${R}${S}`>

// 结果：'Foobar'
type t1 = CapitalizeWords<'foobar'>
// 结果：'Foo Bar.Hello,World'
type t2 = CapitalizeWords<'foo bar.hello,world'>