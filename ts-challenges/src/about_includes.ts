// Includes<T, U>用来判断U是否在数组T中，类似实现数组的includes方法

// Equal：是用来判断两个值是否相等的辅助方法
type Equal<X, Y> = 
    (<T>() => T extends X ? 1 : 2) extends
    (<T>() => T extends Y ? 1 : 2) ? true : false;

// T[number]：它返回数组中所有数字类型键对应的值，将这些值构造成一个联合类型，例如：1 | 2 | 3
// U extends T[number]：判断U是否是某个联合类型的子类型，例如：1 extends 1 | 2 | 3。
type MyIncludes<T extends readonly any[], U> = U extends T[number] ? true : false;

// 每次取数组第一个值判断 Equal，如果不匹配则拿剩余项递归判断
type MyIncludesTwo<T extends readonly any[], U> = 
    T extends [infer R, ...infer L]
        ? Equal<R, U> extends true
            ? true
            : MyIncludesTwo<L, U>
        : false;

// 结果：true
type result1 = Includes<[1, 2, 3], 1>
// 结果：false
type result2 = Includes<[1, 2, 3], '1'>