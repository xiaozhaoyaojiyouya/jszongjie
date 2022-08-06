//构造函数function
function createCard(initName){
    this.name1 = initName
}
//class基本操作
class Card {
    constructor(initName){
        this.name1 = initName
    }
}
const c1 = new Card("小赵")
console.log('c1',c1)
console.log(c1.name1);

//this
class Card{
    constructor(initName){
        this.name1 = initName
        //this.helloooo = this.hello.bind(this)固定在永远执行出小赵  绑定
    }
    hello(){
        console.log("hello",this.name1)

    }
    /*g
    hello= () =>{
        console.log("hello",this.name1)//永远是输出小赵  绑定

    }
    */
}
 //第一个new的引用
const c2 = new Card("小赵")
//console.log('c2',c2)
c2.hello()
   //第二个new的引用
const a = {name1:'AA'}
//a.helloooo = c2.hello
a.helloooo()

//继承
class Car {
    constructor(initName){
        this.name = initName
    }
    start(){
        console.log('车子启动')
    }
}

class Porshe extends Car {
    constructor(nameporshe){
        super(nameporshe)
    }
    start2(){
        super.start()
        console.log('车子排气')
    }
}
const p1 = new Porshe("小赵的宝马")
p1.start()
console.log('name',p1.name)