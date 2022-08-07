// Trunc是用来实现Math.trunc()方法的，数字取整

type Trunc<T extends number | string> = `${T}` extends `${infer L}.${string}` ? L : `${T}`

// 结果：100
type result = Trunc<100.32>