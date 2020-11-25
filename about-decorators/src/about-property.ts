// 属性装饰器

// target: 被装饰的类
// propertyKey: string | symblo -> 被装饰类的属性名

function logProperty(target: any, key: string) {
    delete target[key];

    const backingField = "_" + key;

    Object.defineProperty(target, backingField, {
        writable: true,
        enumerable: true,
        configurable: true
    });

    const getter = function (this: any) {
        const currVal = this[backingField];
        console.log(`Get: ${key} => ${currVal}`);
        return currVal;
    }

    const setter = function (this: any, newVal: any) {
        console.log(`Set: ${key} => ${newVal}`);
        this[backingField] = newVal;
    }

    Object.defineProperty(target, key, {
        get: getter,
        set: setter,
        enumerable: true,
        configurable: true
    })
}

class Person {
    @logProperty
    public name: string;

    constructor(name: string) {
        this.name = name;
    }
}

const p1 = new Person("jo");
p1.name = "jjjj";
console.log(p1.name);