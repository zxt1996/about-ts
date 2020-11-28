// !非空断言操作符
// x!将从x值域中排除null和undefined

function myFunc(maybeString: string | undefined | null) {
    // 忽略undefined和null
    const ignoreUndefinedAndNull: string = maybeString!;
}

type NumGenerator = () => number;

function myFuncTwo(numGenerator: NumGenerator | undefined) {
    const num2 = numGenerator!();
}

// 确定赋值断言，即告诉ts该属性会被明确赋值
let x!: number;
function initialize() {
    x = 10;
}

initialize();
console.log(2 * x);


// ?. -> 可选链(optional Chaining),遇到null或undefined就可以立即停止某些表达式的运行
const arr = [
    { code: "a" },
    { code: "b" },
    { code: "c" },
    { name: "Caty" },
    { name: "Siri" }
  ];
  
  const withCode = arr.map(function(element) {
    if (element.code) return element;
  });

  const notThere = withCode[3]?.code;
  console.log(notThere);


//   ??空值合并运算符，当左侧操作数为null或undefined时，其返回右侧的操作数，否则返回左侧的操作数
const foo = null ?? 'default';
console.log(foo); //default

const baz = 0 ?? 42;
console.log(baz);  //0

interface Customer {
    name: string;
    city?: string;
}

let customer: Customer = {
    name: "ss"
}

let customerCity = customer?.city ?? 'unknown city';



// &交叉类型，将现有的多种类型叠加到一起成为一种类型
type PartialPointX = {
    x: number;
}

type Point = PartialPointX & { y: number };

let point: Point = {
    x: 1,
    y: 9
}



// | 联合类型(union types)表示取值可以为多种类型中的一种
const sayHello = (name: string | undefined) => {
    if (typeof name === 'string') {
        return 'string';
    } else {
        return 'no';
    }
}