// 函数泛型
// 泛型的定义使用<>（尖角号）进行定义的

function join<JSPang>(first: JSPang, second: JSPang) {
    return `${first}${second}`;
}

join<string>("jojo", ".com");
join<number>(1, 2);

// 泛型中数组的使用
function myFun<ANY>(params: ANY[]) {
    return params;
}

myFun<string>(["123", "222"]);

function myFunTwo<ANY>(params: Array<ANY>) {
    return params;
}

myFun<number>([1, 3]);

// 多个泛型的定义
function joinTwo<T, P>(first: T, second: P) {
    return `${first}${second}`;
}

joinTwo<number, string>(1, "22");

// 泛型接口
interface GenericIdentityFn<T> {
    (arg: T): T
}

// 类中泛型
class SelectGirl<T> {
    constructor(private girls: T[]) {}

    getGirl(index: number): T {
        return this.girls[index];
    }
}


const selectGirlOne = new SelectGirl([1, 2, 3]);
// 泛型约束
const selectGirl = new SelectGirl<string> (['a', 'b', 'c']);

// 泛型中的继承
interface GirlTwo {
    name: string;
}

class SelectGirlTwo<T extends GirlTwo> {
    constructor(private girls: T[]) {}

    getGirl(index: number): string {
        return this.girls[index].name;
    }
}

const selectGirlTwo = new SelectGirlTwo([
    { name: "大脚" },
    { name: "刘英" },
    { name: "晓红" },
  ]);
  console.log(selectGirl.getGirl(1));