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

// 有静态方法的枚举
// 使用 enum + namespace 的声明的方式向枚举类型添加静态方法
enum Weekday {
    Monday,
    Tuesday,
    Wednesday,
    Thursday,
    Friday,
    Saturday,
    Sunday
  }

namespace Weekday {
    export function isBusinessDay(day: Weekday) {
        switch (day) {
            case Weekday.Saturday:
            case Weekday.Sunday:
                return false;
            default:
                return true;
        }
    }
}

const mon = Weekday.Monday;
const sun = Weekday.Sunday;

console.log(Weekday.isBusinessDay(mon)); // true
console.log(Weekday.isBusinessDay(sun));