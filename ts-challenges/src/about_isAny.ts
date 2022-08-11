// IsAny是用来判断一个类型是否为any的

// 在ts中，只有any与类型交叉运算后得到的才会是any
// 任何类型都是any的子类型，可以通过extends进行类型约束验证这一点
type IsAny<T> = number extends T & number ? true : false

type t1 = IsAny<undefined> // false
type t2 = IsAny<never>     // false
type t3 = IsAny<any>       // true