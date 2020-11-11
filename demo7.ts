// Enum枚举类型


enum Status {
    MASSAGE,
    SPA,
    DABAOJIAN,
}

function getServe(status: any) {
    if (status === Status.MASSAGE) {
        return "massage";
    } else if (status === Status.SPA) {
        return "spa";
    } else if (status === Status.DABAOJIAN) {
        return "dabaojian";
    }
}

const result = getServe(Status.SPA);

// 枚举类型是有对应的数字值的，默认是从 0 开始的
console.log(Status.MASSAGE);
console.log(Status.SPA);
console.log(Status.DABAOJIAN);

// 不想默认从 0 开始，而是想从 1 开始
enum StatusTwo {
    MASSAGE = 1,
    SPA,
    DABAOJIAN,
  }