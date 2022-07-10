// Pick表示从一个类型中选取指定的几个字段组合成一个新的类型
type Person = {
    name: string;
    age: number;
    address: string;
}

// 结果: { name: string; address: string; }
type PickResult = Pick<Person, 'name' | 'address'>;

// K extends keyof T：表示K只能是keyof T的子类型
// 如果我们在使用Pick的时候传递了不存在于T的字段，会报错
type MyPick<T, K extends keyof T> = {
    [P in K]: T[P]
}
