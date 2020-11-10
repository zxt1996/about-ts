// interface接口
// 接口只是在 TypeScript 里帮我们作语法校验的工具

interface Girl {
    name: string;
    age: number;
    bust: number;
}

const screenResume = (girl: Girl) => {
    girl.age < 24 && girl.bust >= 90 && console.log(girl.name + "进入面试");
    girl.age > 24 || (girl.bust < 90 && console.log(girl.name + "你被淘汰"));
  };
  
  const getResume = (girl: Girl) => {
    console.log(girl.name + "年龄是：" + girl.age);
    console.log(girl.name + "胸围是：" + girl.bust);
  };
  const girl = {
    name: "大脚",
    age: 18,
    bust: 94,
  };
  
  screenResume(girl);
  getResume(girl);

// 接口和类型别名的区别
// 类型别名可以直接给类型，比如string，而接口必须代表对象。
type Girl1 = string;

interface Girl2 {
    name: string;
    age: number;
    bust: number;
    // 接口非必选值
    // 在:号前加一个?
    waistline?: number;
    // 允许加入任意值
    // 属性的名字是字符串类型，属性的值可以是任何类型
    [propname: string]: any;
    // 接口里的方法
    // 返回值是string类型
    say(): string;
}

// 接口和类的约束
class XiaoGirl implements Girl2 {
  name = "j";
  age = 12;
  bust = 90;
  say() {
    return "jjj";
  }
}

// 接口间的继承
interface Teacher extends Girl2 {
  teach(): string;
}