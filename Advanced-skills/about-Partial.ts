// Partial作用是将传入的属性变为可选项
interface Foo {
    name: string,
    age: number
}

type T = keyof Foo   // "name" | "age"

type Keys = "a" | "b"
type Obj = {
    [p in Keys]: any
}  // -> {a: any, b: any}

// keyof T 拿到 T 所有属性名, 然后 in 进行遍历, 将值赋给 P, 最后 T[P] 取得相应属性的值
// type Partial<T> = {[P in keyof T]? : T[P]};