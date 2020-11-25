// 泛型工具类型

// typeof用来获取一个变量声明或对象的类型
interface Person {
    name: string;
    age: number;
}

const sem: Person = {
    name: "jo",
    age: 12
}

type Sem = typeof sem; // -> Person

function toArray(x: number): Array<number> {
    return [x];
}

type Func = typeof toArray; // -> (x: number) => number[]


// keyof用于获取某种类型的所有键，其返回类型是联合类型
type K1 = keyof Person;  //-> "name" | "age"

interface StringArray {
    [index: string]: string;
}

type aboutStringArray = keyof StringArray; //-> string | number
// 其中的原因就是当使用数值索引时，JS在执行索引操作时，会先把数值索引先转换为字符串索引


// in用来遍历枚举类型
type Keys = "a" | "b" | "c"

type Obj = {
    [p in Keys]: any
} // -> {a: any, b: any, c: any}


// 定义的泛型不想过于灵活或想继承某些类时，使用extends添加泛型约束
interface Lengthwise {
    length: number;
}

function logginIdentity<T extends Lengthwise>(arg: T): T {
    console.log(arg.length);
    return arg;
}
// 需要传入符合约束类型的值，必须包含必须的属性
logginIdentity({
    length: 10,
    value: 3
});


// Partial作用是将传入的属性变为可选项
// type Partial<T> = {[P in keyof T]? : T[P]};

interface Todo {
    title: string;
    description: string;
}

function updateTodo(todo: Todo, fieldsToUpdate: Partial<Todo>) {
    return {
        ...todo,
        ...fieldsToUpdate
    };
}

const todo1 = {
    title: "jo",
    description: "learn"
}

const todo2 = updateTodo(todo1, {
    title: "jjj"
})

// Partial<Todo> = {
//     title?: string | undefined;
//     description?: string | undefined;
// }