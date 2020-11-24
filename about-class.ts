// 类
// 类的访问类型
class Person {
    // public允许在类的内部和外部被调用.
    public name: string;
    // private，只允许再类的内部被调用，外部不允许调用
    private secrect: string;
    public sayHello(only) {
        this.secrect = only;
        console.log(this.name + ' hello' + this.secrect);
    }
    // protected 允许在类内及继承的子类中使用
    protected child: string;
}

class Teacher extends Person {
    public sayBye() {
        this.child;
    }
}

const person = new Person();
person.name = "jojo";
person.sayHello("jj");
console.log(person.name);

// private的最大用处是封装一个属性
// 然后通过getter和setter方法来实现数据的封装和有效性校验
let passcode = "hello";
class Employee {
    private _fullName: string;

    get fullName(): string {
        return this._fullName;
    }

    set fullName(newName: string) {
        if (passcode && passcode == "hello") {
            this._fullName = newName;
        } else {
            console.log("error: unauthorized update of employee");
        }
    }
}

let employee = new Employee();
employee.fullName = "sss";
if (employee.fullName) {
    console.log(employee.fullName);
}


// 用static声明的属性和方法，不需要进行声明对象，就可以直接使用
class GirlThree{
    static sayLove() {
        return "ily";
    }
}
console.log(GirlThree.sayLove());

// readonly,在实例化对象时赋予的名字，以后不能再更改了
class PersonTwo {
    public readonly _name: string;

    constructor(name: string) {
        this._name = name;
    }
}

const personTwo = new PersonTwo("jjjj");
// personTwo._name = "jjj"; 报错

// 抽象类
// 抽象类不能被实例化，因为他里面包含一个或多个抽象方法
abstract class PersonWho {
    constructor(public name: string) {}

    abstract say(word: string): void;
}

// 只能实例化实现所有抽象方法的字类
class Developer extends PersonWho {
    constructor(name: string) {
        super(name);
    }

    say(word: string): void {
        console.log(`${this.name} say ${word}`);
    }
}

const logo = new Developer("logo");
logo.say("hei");
