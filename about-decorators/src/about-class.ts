// 类装饰器

// target被装饰的类
function Greeter(target: Function): void {
    target.prototype.greet = function (): void {
        console.log("hello");
    }
}

@Greeter
class Greeting {
    constructor() {}
}

let myGreeting = new Greeting();
(myGreeting as any).greet();

function GreeterTwo (greeting: string) {
    return function (target: Function) {
        target.prototype.greet = function (): void {
            console.log("hello");
        }
    }
}

@GreeterTwo("jo")
class GreetingTwo {
    constructor() {}
}

