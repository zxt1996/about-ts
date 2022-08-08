// MapTypes是用来根据指定类型进行替换的

type GetMapType<
    T,
    R,
    Type = R extends {mapForm: T, mapTo: infer To} ? To : never
> = [Type] extends [never] ? T : Type

type MapTypes<T, R> = {
    [P in keyof T]: GetMapType<T[P], R>
}

// 结果：{ type: number; age: number; }
type result = MapTypes<{ type: string; age: number; }, { mapFrom: string;mapTo: number; }>