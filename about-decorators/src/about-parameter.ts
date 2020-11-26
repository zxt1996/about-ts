// 参数装饰器

// target: 被装饰的类
// propertyKey: string | symblo -> 方法名
// parameterIndex: number ->方法中参数的索引值

function Log(target: Function, key: string, parameterIndex: number) {
    let functionLogged = key || target.prototype.constructor.name;

    console.log(parameterIndex, functionLogged);
}

class Greeter {
    greeting: string;

    constructor(@Log phrass: string) {
        this.greeting = phrass;
    }

    other(one: string, @Log two: string) {
        console.log(one, two);
    }
}

let about = new Greeter("jjj");
about.other("1", "2");