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
}, []);

// console.log(result);

let result2 = [].reduce((prev, cur, index, arr) => {
    // if (exerciseArray[index] === undefined) {
    //     cur.value.push({ id: 0, name: null, value: null, Children: null, date: cur.key })
    // }
    // else {
    //     cur.value.push(exerciseArray[index]);
    // }
    return prev;
}, result);

console.log(result2);

// result = result.reduce((prev, cur, index) => {
//     if (gradeArray[index] !== undefined) {
//         prev[cur.key].push(gradeArray[index]);
//     } else {
//         prev[cur.key].push({ id: 0, name: null, value: null, Children: null, date: cur.date })
//     }
//     return prev;
// }, result);

// console.log(result);