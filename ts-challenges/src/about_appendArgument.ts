// AppendArgument是用来向一个函数追加一个参数的

// 利用infer关键词得到了Fn函数的参数类型以及返回类型，然后把新的参数添加到参数列表，并原样返回其函数类型
type AppendArgument<Fn, A> = Fn extends (...args: infer R) => infer T ? (...args: [...R, A]) => T : never

//  结果：(a: number, b: number) => number
type result = AppendArgument<(a: number) => number, number>