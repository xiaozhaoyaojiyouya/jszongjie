//Array ,Objrct
let c1 = '小明'
let c2 = '小白'
   //正列
let classA =['小明','小白','小华']
console.log("转学前：", classA)
classA.push('小黄')//输入
console.log("转学后：", classA)
let igPhots = [
    'http://xx.img.com/a1.png',
    'http://xx.img.com/a1.png',
    'http://xx.img.com/a1.png',
]
    
console.log("第一个",igPhots[0])
console.log("第一个",igPhots[1])
console.log("第一个",igPhots[2])
  
console.log('igPhots',igPhots)//输出内容
console.log('igPhots.len' , igPhots.length)//长度

//物件Object
const card = {
    name1: "我是小赵",
    addres: "山东菏泽",
    age: 999,
}
console.log('名字',card.name1)//拿出物件里的一个属性
    //正列与物件
const post = {
    image: 'https://xx.img.com/a1.png',
    desc:'这是一张图片',
    date: '2022/8/5',
    comment:['好漂亮','我也要去']

}
const post2 = {
    image: 'https://xx.img.com/a1.png',
    desc:'这是一张图片',
    date: '2022/8/5',
    comment:['好漂亮','我也要去','好漂亮','我也要去']

}
const wall = [ 
    post,
    post2
]
console.log('wall',wall)


