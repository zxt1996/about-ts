// FlipObject是用来将对象的键值交换的

type BasicType = string | number | boolean
type FlipObject<T extends Record<string, BasicType>> = {
    [P in keyof T as `${T[P]}`]: P
}

// 结果：{ pi: 'a' }
type result = FlipObject<{ a: 'pi' }>