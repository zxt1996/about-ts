// 泛型类
interface GenericInterface<U> {
    value: U;
    getIdentity: () => U;
}

class IdentityClass<T> implements GenericInterface<T> {
    value: T

    constructor(value: T) {
        this.value = value;
    }

    getIdentity(): T {
        return this.value
    }
}

const one = new IdentityClass<Number>(89);
console.log(one.getIdentity());