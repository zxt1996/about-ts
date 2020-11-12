// Reflect Metadata,主要用来在声明的时候添加和读取元数据
import 'reflect-metadata';
// Reflect.metadata 当作 Decorator 使用，
// 当修饰类时，在类上添加元数据，当修饰类属性时，在类原型的属性上添加元数据
/**
* @param metadataKey 元数据入口的key
* @param metadataValue 元数据入口的value
* @returns 装饰器函数
*/
@Reflect.metadata('inClass', 'A')
class Test {
    @Reflect.metadata("inMethod", "B")
    public hello(): string {
        return "hello";
    }
}

console.log(Reflect.getMetadata("inClass", Test));   // A
console.log(Reflect.getMetadata("inMethod", new Test(), 'hello'));  //  B

// 获取类型信息
// 类型元数据使用元数据键"design:type"
// 参数类型元数据使用元数据键"design:paramtypes"
// 返回值类型元数据使用元数据键"design:returntype"
function logType(target: any, key: string) {
    const type = Reflect.getMetadata('design:type', target, key);
    console.log(`${key} type: ${type.name}`);   //myProp type: String
}

class Demo {
    @logType
    public myProp: string;

    constructor(oneProp: string) {
        this.myProp = oneProp;
    }
}

function logParamTypes(target: any, key: string) {
    const types = Reflect.getMetadata("design:paramtypes", target, key);
    const s = types.map((a : {name: string}) => a.name).join();
    console.log(`${key} param types : ${s}`);
}

class ParamDemo{
    @logParamTypes
    doSomething(
        param1: string,
        param2 : { test : string },
        param3 : Function,
        param4 : (a : number) => void,
    ) : number {
        return 1;
    }
}

function logReturnType(target: any, key: string) {
    const types = Reflect.getMetadata("design:returntype", target, key);
    console.log(`${key} return types : ${types.name}`);
}

class ReturnDemo{
    @logReturnType
    doSomething(
        param1: string
    ) : number {
        return 1;
    }
}


// 自定义metadataKey
/**
  * @param metadataKey 设置或获取时的key
  * @param metadataValue 元数据内容
  * @param target 待装饰的target
  * @param targetKey target的property
*/
function classDecorator(): ClassDecorator {
    return target => {
        Reflect.defineMetadata("classMetaData", "a", target);
    }
}

function methodDecorator(): MethodDecorator {
    return (target, key, descriptor) => {
        Reflect.defineMetadata("methodMetaData", "b", target, key);
    }
}

@classDecorator()
class SomeClass {
    @methodDecorator()
    someMethod() {}
}

/**
* @param metadataKey 元数据key
* @param target 元数据定义的target
* @param targetKey 可选项, 是否选择target的某个key
* @returns 如果找到了元数据则返回元数据值, 否则返回undefined
*
*/
console.log(Reflect.getMetadata('classMetaData', SomeClass));
console.log(Reflect.getMetadata("methodMetaData", new SomeClass(), 'someMethod'));

