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

let allArray = [];

for (let i = 0; i < maxNumber; i++) {
    let currentDate = trainArray[0].date;
    allArray[currentDate] = [];

    if (exerciseArray.some(x => x.date == currentDate)) {
        allArray[currentDate].push(exerciseArray.filter(x => x.date == currentDate))
    }
    else {
        allArray[currentDate].push({ id: 0, name: null, value: 10, Children: null, date: currentDate });
    }
}

console.log(allArray);