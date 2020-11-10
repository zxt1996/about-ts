// 静态类型
function jsPan() {
    let web : string = "hello world";

    console.log(web);
}

jsPan()

// 自定义静态类型
interface People {
    name: string;
    age: number;
}

const oneMan: People = {
    name: "小明",
    age: 18,
}

// 基础静态类型
const count: number = 918;
const myName: string = 'jojo';

// 对象类型
const xi: {
    name: string,
    age: number,
} = {
    name: "解耦",
    age: 18,
};

console.log(xi.age);

// 数组类型
const moreName: string[] = ["j", "a", "aa"];

// 类类型
class Person {}
const dajiao: Person = new Person;

// 函数类型
const aboutMe: () => string = () => {
    return "aa";
}