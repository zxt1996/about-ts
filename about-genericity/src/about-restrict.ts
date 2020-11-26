// 泛型约束
// 使得类型变量对应的类型上存在某些属性

interface Length {
    length: number;
}

function identity<T extends Length>(arg: T): T {
    console.log(arg.length); //可以获取length属性
    return arg
}