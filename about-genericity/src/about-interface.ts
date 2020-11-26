// 泛型接口
interface Identities<V, M> {
    value: V,
    message: M
}

function identity<T, U> (value: T, message: U): Identities<T,U> {
    console.log(typeof value);
    console.log(typeof message);
    let identities: Identities<T, U> = {
        value,
        message
    };

    return identities;
}

console.log(identity(22, "jo"))