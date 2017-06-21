// 方法的返回值类型和传入参数的类型是相同的

function identity<T>(arg: T): T {
    return arg;
}

let output = console.log(identity<string>('Hugo'));

let output2 = console.log(identity('Hugo2'));


// 泛型类
class GenericNumber<T> {
    zeroValue: T;
    add: (x: T, y: T) => T;
}

let myGenericNumber = new GenericNumber<number>();
myGenericNumber.zeroValue = 0;
myGenericNumber.add = function(x, y) { return x + y; };

let res = myGenericNumber.add(2,3);

console.log(res);



