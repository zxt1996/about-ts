// interface接口

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

// 接口非必选值
// 在:号前加一个?
interface Girl2 {
    name: string;
    age: number;
    bust: number;
    waistline?: number;
}