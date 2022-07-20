type Space = ' ' | '\n' | '\t'
type TrimLeft<S extends string> = S extends `${Space}${infer R}` ? TrimLeft<R> : S
type Trim<S extends string> = S extends (`${Space}${infer R}` | `${infer R}${Space}`) ? Trim<R> : S
type TrimRight<S extends string> = S extends `${infer R}${Space}` ? TrimRight<R> : S

const t1 = TrimLeft<' str'>  // 'str'
const t2 = Trim<' str '>     // 'str'
const t3 = TrimRight<'str '> // 'str'