// 在JavaScript中，因为一个对象的属性只能是string、number或者symbol这三种类型，所以我们限定K必须满足此条件。
type basicKeyType = string | number | symbol
type AppendToObject<T, K extends basicKeyType, V> = {
    [P in keyof T | K]: P extends keyof T ? T[P] : V
}

// 结果：{ id: number; name: string; }
type result = AppendToObject<{ id: number; }, 'name', string>