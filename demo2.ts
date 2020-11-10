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
