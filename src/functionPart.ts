// 完整的参数类型

let myAdd: (x: number, y: number) => number = function (x: number, y: number): number { return x + y; }


console.log(myAdd(2, 3));

// 可选参数和默认参数

// 可选参数
function buildName(firstName: string, lastName?: string) {
    if (lastName)
        return firstName + " " + lastName;
    else
        return firstName;
}

// 默认参数
function buildNameWithDefault(firstName: string, lastName = "Shen") { }


// 剩余参数
function buildNameWithRestParams(firstName: string, ...restOfName: string[]) {
    return firstName + " " + restOfName.join(" ");
}


let deck = {
    suits: ["hearts", "spades", "clubs", "diamonds"],
    cards: Array(52),
    createCardPicker: function () {
        // NOTE: 箭头函数能保存函数创建时的this值，而不是调用时的值
        return () => {
            let pickedCard = Math.floor(Math.random() * 52);
            let pickedSuit = Math.floor(pickedCard / 13);

            return { suit: this.suits[pickedSuit], card: pickedCard % 13 };
        }
    }
}

let cardPicker = deck.createCardPicker();
//let pickedCard = cardPicker();

console.log("card: " + cardPicker().card + " of " + cardPicker().suit);


let suits = ["hearts", "spades", "clubs", "diamonds"];

// 函数重载
function pickCard(x: {suit: string; card: number; }[]): number;
function pickCard(x: number): {suit: string; card: number; };
function pickCard(x): any {
    // Check to see if we're working with an object/array
    // if so, they gave us the deck and we'll pick the card
    if (typeof x == "object") {
        let pickedCard = Math.floor(Math.random() * x.length);
        return pickedCard;
    }
    // Otherwise just let them pick the card
    else if (typeof x == "number") {
        let pickedSuit = Math.floor(x / 13);
        return { suit: suits[pickedSuit], card: x % 13 };
    }
}

let myDeck = [{ suit: "diamonds", card: 2 }, { suit: "spades", card: 10 }, { suit: "hearts", card: 4 }];
let pickedCard1 = myDeck[pickCard(myDeck)];
console.log("card: " + pickedCard1.card + " of " + pickedCard1.suit);

let pickedCard2 = pickCard(15);
console.log("card: " + pickedCard2.card + " of " + pickedCard2.suit);