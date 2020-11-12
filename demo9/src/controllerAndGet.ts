import 'reflect-metadata';
import { isFunction } from 'util';

const METHOD_METADATA = 'method';
const PATH_METADATA = 'path';

const Controller = (path: string): ClassDecorator => {
    return target => {
        Reflect.defineMetadata(PATH_METADATA, path, target);
    }
}

const createMappingDecorator = (method: string) => (path: string): MethodDecorator => {
    //假如修饰类的属性则传入三个参数，对应Object.defineProperty()里三个参数
    //target为目标对象，对应为Class的实例
    //name为所要修饰的属性名，这里就是修饰器紧跟其后的name属性
    //descriptor为该属性的描述对象
    // descriptor.value相当于someGetMethod()
    return (target, key, descriptor: any) => {
        Reflect.defineMetadata(PATH_METADATA, path, descriptor.value);
        Reflect.defineMetadata(METHOD_METADATA, method, descriptor.value);
    }
}

const Get = createMappingDecorator("GET");
const Post = createMappingDecorator("POST");

@Controller('/test')
class SomeClass {
    @Get("/a")
    someGetMethod() {
        return "hello"
    }

    @Post("/b")
    somePostMethod() {}
}

// 映射出route
function mapRoute(instance: Object) {
    const prototype = Object.getPrototypeOf(instance);

    // 筛选出类的methodName
    const methodsNames = Object.getOwnPropertyNames(prototype)
                            .filter(item => item != 'constructor' && isFunction(prototype[item]));

    return methodsNames.map(methodName => {
        const fn = prototype[methodName];

        // 取出定义的metadata
        const route = Reflect.getMetadata(PATH_METADATA, fn);
        const method = Reflect.getMetadata(METHOD_METADATA, fn);

        return {
            route,
            method,
            fn,
            methodName
        }
    })
}

console.log(mapRoute(new SomeClass()));
// [
//     {
//       route: '/a',
//       method: 'GET',
//       fn: [Function],
//       methodName: 'someGetMethod'
//     },
//     {
//       route: '/b',
//       method: 'POST',
//       fn: [Function],
//       methodName: 'somePostMethod'
//     }
//   ]