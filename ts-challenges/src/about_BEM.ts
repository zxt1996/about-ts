// BEM是用来将字符串连接成CSS BEM格式的

// 判断是一个空数组，可以使用T extends []或者T['length'] extends 0
// T[number]会自动迭代数组
// 结果: 'A_B' | 'A_C' | 'A_D'
type results = `A__${['B', 'C', 'D'][number]}`

type ArrayToString<
    T extends any[],
    P extends string
> = T extends [] ? '' : `${P}${T[number]}` 

type BEM<
    B extends string,
    E extends string[],
    M extends string[]
> = `${B}${ArrayToString<E, '__'>}${ArrayToString<M, '--'>}`

// 使用示例：
type result = BEM<'btn', ['price'], ['warning', 'success']> // 'btn__price--warning' | 'btn__price--success'