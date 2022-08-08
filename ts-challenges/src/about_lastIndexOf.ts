
type LastIndexOf<T, U> = T extends [...infer R, infer L]
    ? Equal<L, U> extends true
        ? R['length']
        : LastIndexOf<R, U>
    : -1

type Res1 = LastIndexOf<[1, 2, 3, 2, 1], 2> // 3
type Res2 = LastIndexOf<[0, 0, 0], 2> // -1