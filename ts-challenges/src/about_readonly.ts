type Coord = Readonly<Record<'x' | 'y', number>>;

// 等同于
type CoordTwo = {
    readonly x: number;
    readonly y: number;
}

type Persons = {
    readonly name: string;
    age: number;
}

type MyReadonly<T> = {
    readonly [P in keyof T]: T[P]
}

// 结果：{ readonly name: string; readonly age: number; }
type ReadonlyResult = MyReadonly<Persons>
