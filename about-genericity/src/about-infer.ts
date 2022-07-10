// infer -> 表示在 extends 条件语句中待推断的类型变量

// 如果 T 能赋值给 (param: infer P) => any，则结果是 (param: infer P) => any 类型中的参数 P，否则返回为 T。
type ParamType<T> = T extends (param: infer P) => any ? P : T;

interface User {
    name: string;
    age: number;
}

type Funsc = (user: User) => void;

type Param = ParamType<Funsc>; //Param = User
type AA = ParamType<String>;  //string

type ElementOf<T> = T extends Array<infer E> ? E : never;
type TTuple = [string, number];
type ToUnion = ElementOf<TTuple>; //string | number