//window.alert("")
//document
window.addEventListener('load',function(){//load监听器
    const p1 = this.document.getElementById('title')//id
    p1.innerText = "哈哈哈"//拿到元素以后替换
    
    const b1 = this.document.getElementById('btn')//拿到元素id
    b1.addEventListener('click',function(){//chick监听器
        console.log('按下去')
    })

    const box1 = this.document.getElementById('box')//
    box1.innerHTML = '<p>我小赵</p>'//替换元素

    const in1 = this.document.getElementById('input1')//拿元素
    in1.addEventListener('keyup',function(e){//监听
        console.log('e.target.value',e.target.value)

    })

})