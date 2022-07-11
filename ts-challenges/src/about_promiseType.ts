// PromiseType是用来获取Promise包裹类型的

function getInfo (): Promise<string|number> {
    return Promise.resolve(1);
}

// 结果：(） => Promise<string|number>
type funcType = typeof getInfo;

// 结果：Promise<string|number>
type returnResult = ReturnType<funcType>;

// T extends Promise<infer R>：判断T是否是Promise<infer R>的子类型，也就是说T必须满足Promise<any>的形式
type PromiseType<T> = 
    T extends Promise<infer R> 
        ? R extends Promise<any>
            ? PromiseType<R>
            : R
        : never;

// 结果：string|number
type PromiseResult = PromiseType<returnResult>;
