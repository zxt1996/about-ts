// 方法装饰器
// target: 被装饰的类
// propertyKey: string | symblo -> 方法名
// descriptor: TypePropertyDescript -> 属性描述符

function log(target: Object, propertyKey: string, descriptor: PropertyDescriptor) {
    console.log(target, propertyKey, descriptor);
    descriptor.value("jo");  //descriptor.value相当于装饰的方法
}

class Task {
    @log
    runTask(arg: any): any {
        console.log("args: " + arg);
        return "finished";
    }
}

let task = new Task();
let result = task.runTask("about ts");
console.log("result ", result);