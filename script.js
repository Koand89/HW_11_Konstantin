
let a=2.7;
let b="2.7";

function f1(){
    if (a>b){
        alert("a>b");
    }else if(a<b){
        alert("a<b");
    }else if(a===b){
        alert("a===b");
    }else if (a==b){
        alert("a==b");
    }
}

function f2(){
    let inp1=prompt("Function 2 input");
    if(inp1%10==0){
        console.log("TRUE");
    }
}
let n=1;
function f3(){
    alert(n++);
}
let m;
function init(){
    m=prompt("enter number");
    if (isNaN(m)){
        m=1;
    }
}
function f4(){
    if (isNaN(m)){
        m=1;
    }
    alert(m++);
}


