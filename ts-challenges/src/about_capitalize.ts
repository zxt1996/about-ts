type Capatilize<S extends string> = S extends `${infer char}${infer L}` ? `${Uppercase<char>}${L}` : S
type Uncapatilize<S extends string> = S extends `${infer char}${infer L}` ? `${Lowercase<char>}${L}` : S


type t1 = Capitalize<'hello'>   // 'Hello'
type t2 = Uncapatilize<'Hello'> // 'hello'