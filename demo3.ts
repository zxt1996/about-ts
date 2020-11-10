// 数组类型

const numberArr: number[] = [1, 2, 3];
const stringArr: string[] = ["a", "b", "c"];
const undefinedArr: undefined[] = [undefined, undefined];

const arr: (number | string)[] = [1, "string", 2];

// 数组中对象类型的定义
type Lady = {
    name: string,
    age: number,
}

const xiao: Lady[] = [
    {
        name: "j",
        age: 12,
    },
    {
        name: "aa",
        age: 11
    }
]

// 元组,把数组中的每个元素类型的位置给固定住
const xiaomi: [string, string, number] = ["aa", "bb", 22];

