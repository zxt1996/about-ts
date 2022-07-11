// If<C, T, F>用来表示根据C的值来返回T或者F，如果C为true，则返回T；如果C为false，则返回F
// C extends boolean：表示C为boolean类型的子类型，既C只能为true或者false，传递其它值报错。
type IF<C extends boolean, T, F> = C extends true ? T : F;

// 结果：'a'
type result1 = If<true, 'a', 'b'>
// 结果：'b'
type result2 = If<false, 'a', 'b'>
