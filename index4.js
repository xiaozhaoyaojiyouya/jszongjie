//for( ; ; )
for( let i = 0;i < 10; i++){
    console.log('i',i)
}
//3个人的班级
let classA =[100,70,59]
//console.log(classA[0])
//console.log(classA[1])
//console.log(classA[2])
for (let i = 0; i < 3; i++){
    console.log('i',classA[3])
}
for (let i = 0; i < classA.length; i++){
    console.log('i',classA[3])
}


for (let i = 0; i < classA.length; i++){
    if(i==2){
        classA[i]=60
    }
}
console.log(classA)//60

//物件Object 正列包含物件
const posts = [{
    name1: '小赵',
    desc: '好好'
},
{
    name1: '小亚',
    desc: '豪豪'
}]
for( i = 0; i < posts.length; i++){
    if(i===0){
        let post = posts[i]
        console.log(post)
    }
}

//while
let condition = 100
while (condition<101){
    console.log(condition)
}