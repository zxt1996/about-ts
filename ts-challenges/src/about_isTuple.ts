// IsTuple是用来判断是否为一个元组的

type IsTuple<T> = 
    [T] extends [never]
        ? false
        // 因为存在 IsTuple<{ length: 1 }> 单测用例，它可以通过 number extends T['length'] 的校验，但因为其本身不是数组类型，所以无法通过 T extends readonly any[] 的前置判断
        : T extends readonly any[]
            ? number extends T['length']
                ? false
                : true
            : false

// Tuple 与 Array 在 TS 里的区别是前者长度有限，后者长度无限，从结果来看，如果访问其 ['length'] 属性，前者一定是一个固定数字，而后者返回 number
// 代码是number extends T['length']，这里不能写成T['length'] extends number

// 第一种方式
// number extends T['length']
// => number extends 1
// => false

// 第二种方式
// T['length'] extends number
// => 1 extends number
// => true

// 使用示例：
type A1 = IsTuple<[]> // true
type A2 = IsTuple<[number]> // true
type A3 = IsTuple<{ length: 1 }> // false
type A4 = IsTuple<number[]> // false