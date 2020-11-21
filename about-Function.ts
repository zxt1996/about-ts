// 函数参数和返回类型
function getTotal(one: number, two: number): number {
    return one + two;
}

const total = getTotal(1, 2);

// 无返回值
function sayHello(): void {
    console.log("jojo");
}

// 如果一个函数是永远也执行不完的，就可以定义返回值为never
function errorFunction(): never {
    throw new Error();
}

// 函数参数为对象(解构)时
function add({one, two}: {one: number, two: number}): number {
    return one + two;
}

function getNumber({ one }: {one: number}): number {
    return one;
}

const one = getNumber({one: 1})

// 可选参数
function foo(bar: number, other: string = 'hello', bas?: string): void {
    console.log(bar, other);
    if (bas) {
        console.log(bas);
    }
}

foo(123);
foo(123, 'one', 'two');

// 箭头函数
const simple: (foo: number) => string = foo => foo.toString();
simple(1);
type Adder = (a: number, b: number) => number;
let fooAdd: Adder = (a, b) => a + b;


interface IUser {
    name: string,
    id: number,
    address: string
}
// 重载
// 使用相同名称和不同参数数量或类型创建多个方法的一种能力
// 上边是声明
function getNames(userList: IUser[], id: number): string;
function getNames(userList: IUser[], id: number[]): string[];
// 下边是实现
function getNames(userList: IUser[], id: number | number[]): string | string[] {
    if (Array.isArray(id)) {
        const names: string[] = [];
        userList.forEach((user: IUser) => {
            if (id.includes(user.id)) {
                names.push(user.name);
            }
        })

        return names;
    }

    const found = userList.find((user: IUser) => user.id === id);
    if (found) {
        return found.name;
    } else {
        return ''
    }
}

const users: IUser[] = [
    {name: 'John', id: 1, address: ''},
    {name: 'Joi', id: 2, address: ''},
    {name: 'Kevin', id: 3, address: ''}
  ]
  const John = getNames(users, 1);
  const JohnAndKevin = getNames(users, [1, 3]);