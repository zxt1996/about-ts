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

// private的最大用处是封装一个属性，然后通过 Getter 和 Setter 的形式来访问和修改这个属性。
class XiaoMi {
    constructor(private _age: number) {}

    get age() {
        return this._age - 10;
    }

    set age(age: number) {
        this._age = age;
    }
}

const xiaoxiao = new XiaoMi(28);
xiaoxiao.age = 25;
console.log(xiaoxiao.age);

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
abstract class Girl{
    abstract skill()  //因为没有具体的方法，所以我们这里不写括号

}

class Waiter extends Girl{
    skill(){
        console.log('大爷，请喝水！')
    }
}

class BaseTeacher extends Girl{
    skill(){
        console.log('大爷，来个泰式按摩吧！')
    }
}

class seniorTeacher extends Girl{
    skill(){
        console.log('大爷，来个SPA全身按摩吧！')
    }
}
