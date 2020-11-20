// 联合类型和类型保护
// 所谓联合类型，可以认为一个变量可能有两种或两种以上的类型。

interface Waiter {
    anjiao: boolean;
    say: () => {};
}

interface Teacher {
    anjiao: boolean;
    skill: () => {};
}

function judgeWho(animal: Waiter | Teacher) {
    // animal.say();  报错，因为judgeWho不能准确的判断联合类型具体的实例是什么
    
    // 类型保护-类型断言
    // 类型断言就是通过断言的方式确定传递过来的准确值
    if (animal.anjiao) {
        (animal as Teacher).skill();
    } else {
        (animal as Waiter).say();
    }

    // 类型保护-in
    if ("skill" in animal) {
        animal.skill();
    } else {
        animal.say();
    }
}

// 类型保护-typeof
function add(first: string | number, second: string | number) {
    if (typeof first === "string" || typeof second === "string") {
        return `${first}${second}`;
    }

    return first + second;
}

// 类型保护-instanceof
class NumberObj {
    count: number;
}

function addObj(first: object | NumberObj, second: object | NumberObj) {
    if (first instanceof NumberObj && second instanceof NumberObj) {
        return first.count + second.count;
    }

    return 0;
}


// 交叉类型
function extend<T extends object, U extends object>(first: T, second: U): T & U {
    // 从两个对象中创建一个新对象，新对象拥有着两个对象所有的功能
    const result = <T & U>{};
    for (let id in first) {
        (<T>result)[id] = first[id];
    }

    for (let id in second) {
        if (!result.hasOwnProperty(id)) {
            (<U>result)[id] = second[id];
        }
    }

    return result;
}

const x = extend({ a: 'hello' }, { b: 42 });
console.log(x);
// 现在 x 拥有了 a 属性与 b 属性
const a = x.a;
const b = x.b;