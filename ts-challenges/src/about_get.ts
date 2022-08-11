// Get是用来进行字符串路径取值的

type Get<T, S extends string> = 
    S extends `${infer S1}.${infer S2}`
        ? S1 extends keyof T
            ? Get<T[S1], S2>
            : never
        : S extends keyof T
            ? T[S]
            : never

type Data = {
    foo: {
        bar: {
        value: 'foobar',
        count: 6,
        },
        include: true,
    },
    hello: 'world'
}

// 结果：world
type t1 = Get<Data, 'hello'>
// 结果：foobar
type t2 = Get<Data, 'foo.bar.value'>
// 结果： never
type t3 = Get<Data, 'no.exits'>