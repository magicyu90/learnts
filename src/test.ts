// 模拟培训系统个人成绩

let exerciseArray = [
    { id: 0, name: null, value: 10, Children: null, date: "2017/06/21" },
    { id: 0, name: null, value: null, Children: null, date: "2017/06/22" },
    { id: 0, name: null, value: 16, Children: null, date: "2017/06/23" }
]

let trainArray = [
    { id: 0, name: null, value: 12, Children: null, date: "2017/06/19" },
    { id: 0, name: null, value: 30, Children: null, date: "2017/06/20" },
    { id: 0, name: null, value: 57, Children: null, date: "2017/06/21" },
    { id: 0, name: null, value: null, Children: null, date: "2017/06/22" },
    { id: 0, name: null, value: 16, Children: null, date: "2017/06/23" }
]

let gradeArray = [
    { id: 0, name: null, value: 10, Children: null, date: "2017/06/21" },
    { id: 0, name: null, value: null, Children: null, date: "2017/06/22" },
    { id: 0, name: null, value: 33, Children: null, date: "2017/06/23" }
]

let maxNumber = Math.max(exerciseArray.length, trainArray.length, gradeArray.length);

exerciseArray = exerciseArray.reverse();
trainArray = trainArray.reverse();
gradeArray = gradeArray.reverse();

let result = trainArray.reduce((prev, cur) => {
    prev[cur.date] = [];
    prev[cur.date].push(cur);
    return prev;
}, {});

// console.log(result);
Object.keys(result).forEach(function (key, index) {
    // do something with obj[key]
    if (gradeArray[index] === undefined) {
        result[key].push({ id: 0, name: null, value: null, Children: null, date: key });
    }
    else {
        result[key].push(gradeArray[index]);
    }
});

// console.log(result);
Object.keys(result).forEach(function (key, index) {
    // do something with obj[key]
    if (exerciseArray[index] === undefined) {
        result[key].push({ id: 0, name: null, value: null, Children: null, date: key });
    }
    else {
        result[key].push(exerciseArray[index]);
    }
});

console.log(result);

var arr = [1, 2, 3]

var pro = arr.reduce(function (pre, cur, index, arr) { return pre * cur })

console.log('pro:' + pro);
