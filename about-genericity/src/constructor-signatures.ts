// 构造签名

interface IAnimal {
    name: string;
}

interface IClassyAnimal {
    // 描述类本身的类型
    new (name: string): IAnimal
}

class Parrot {
    constructor(public name: string) {}
}

function petFactory(petClass: IClassyAnimal, name: string) {
    return new petClass(name);
}

const pet = petFactory(Parrot, "mcParrotface");