//if ..else..语句
if (100 > 50) {
    console.log("正确")
}
else {
    console.log("错误")

}
//+ -* 
//&& 一假着假 （and)
// || 一真着真 （or）
//! 真假相反
let condition = false && true//一假着假
console.log(condition)//false

let condition2 = false ||true//一真着真
console.log(condition2)//true
//===
let scoreA = 100
let scoreB = 99
let condition3 = scoreA ===scoreB
console.log(condition3)//false
//if..else if..else
let score4 = 100
if(score4 >= 100){
    console.log('好厉害')
}else if(score4>70){
    console.log('要加油')
}else{
    console.log('去重修')
}
//switch(){case:}
let key = 100 
switch(key){
    case 100:
        console.log('考了100分')
        break;
    case 200:
        console.log('考了200分')
        break;
    case 300:
        console.log('考了300分')
        break;
    default:
        console.log('没有去考试')
        break

}
