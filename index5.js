//function函数
//1.宣告
function hello (){
    console,console.log('你好');
}
function hello2 (){
    console,console.log('你好2');
}
function hello3 (){
    console,console.log('你好3');
}
//执行
hello()//你好
hello2()//你好2
hello3()//你好3
//2.
function addMoney() {
    console.log(100 + 200)
}
addMoney()//300

//3.有参数宣告
function addMoney(price1,price2){
    condition.log('price1',price1)
    condition.log('price2',price2)
    condition.log(price1+price1)
}
//有参数执行
addMoney(200,100)

//3.(1)有回传值
function addMoney (price1, price2, discout){
    let result = price1+price2-discout
    return result
}

let total = addMoney(200,100,50)
console.log('total',total)

//3.(2)有回传值和语句
function addMoney (price1, price2, discout){
    let result = price1+price2-discout
   
    if (result>200){
        messagre = '尊敬的会员'
    }
    if (result<200){
        messagre = '白金会员'
        return
         messagre 
    }
    return result
}

let total2 = addMoney(200,100,50)
console.log('total',total)
//c
const card = {
    name1: "小明"
}
const card2 = {
    name1: "小明2"
}
const card3 = {
    name1: "小明3"
}
//构造函数
function createCard(initname){
    this.cardName = initname
}
//new 建立或构造
const a1 = new createCard('小明')
const a2 = new createCard('小明2')
const a3 = new createCard('小明3')
const a4 = new createCard('小明4')
console.log(a1);
console.log(a2);
console.log(a3);
console.log(a4);
//都一样
function hello(){}
let hello = function(){}
let hello =() =>{}
