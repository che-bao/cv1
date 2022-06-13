let html = document.querySelector('#html');  //通过css选择器找到这个元素
let style = document.querySelector('#style');

let string = `/* 你好，我是一名前端新人   
 * 接下来我演示一下我的前端功底
 * 首先我要准备一个div
 */
 #div1{
    border:1px solid red;
    width: 200px;
    height: 200px;
}
/* 接下来我把div变成一个八卦图
 * 注意看好了
 * 首先，把div变成一个圆
 */
#div1{
    border-radius:50%;          
    box-shadow: 0 0 3px rgba(0,0,0,0.5);
    border:none;
}
/* 八卦是阴阳形成的
 * 一黑一白
 */
#div1{
    background: linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 50%, rgba(0,0,0,1) 50%, rgba(0,0,0,1) 100%);
}
/* 加两个神秘小球 */
#div1::before{
    width: 100px;
    height: 100px;
    top:0;
    left: 50%;
    transform: translateX(-50%);
    background: #000;
    border-radius: 50%;
    background: radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 25%, rgba(0,0,0,1) 25%, rgba(0,0,0,1) 100%);
}
#div1::after{
    width: 100px;
    height: 100px; 
    bottom:0;
    left: 50%;
    transform: translateX(-50%);
    background: #fff;
    border-radius: 50%;
    background: radial-gradient(circle, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 25%, rgba(255,255,255,1) 25%, rgba(255,255,255,1) 100%);
}
`  //在中文加注释才可以有样式
let string2 =''
let n = 0
//string = string.replace(/\n/g,"<br>");      //replace把一个东西变成另一个东西，正则表达式 / /g 让所有回车变成<br>

let step = () =>{
setTimeout(()=>{
    //如果是回车就不照搬
    //如果不是回车就照搬
    if(string[n]==="\n"){
        string2 +="<br>"  
    }else if(string[n]=== " "){
        string2 +="&nbsp"
    }else{
        string2 += string[n]
    }
    //html.innerHTML = string.substring(0,n);     //substring显示0到n
    html.innerHTML = string2
    style.innerHTML = string.substring(0,n);     //css不能出现html标签，用substring可以  
    window.scrollTo(0,99999)        //电脑滚动条自动往下
    html.scrollTo(0,99999)          //手机滚动条自动往下
    if(n < string.length-1){    //如果n不是最后一个就继续
    n += 1
    step();
    }
},0);
}
step();


