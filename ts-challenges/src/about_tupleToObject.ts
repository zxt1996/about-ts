// TupleToObject<T>是用来把一个元组转换成一个key/value相同的对象
// as const：常用来进行常量断言，在此处表示将['msg','name']推导常量元组，表示其不能新增、删除、修改元素，可以使用as readonly来辅助理解。
const tuple = ['msg', 'name'] as const;

// T[number]：表示返回所有数字型索引的元素，形成一个联合类型，例如：'msg'|'name'
type TupleToObject<T extends readonly any[]> = {
    [P in T[number]]: P
}

type result = TupleToObject<typeof tuple>;