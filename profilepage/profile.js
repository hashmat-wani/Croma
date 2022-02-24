

var userarr=[];
document.querySelector(".btn2").addEventListener("click" ,userpro)
function userpro(event){
    event.preventDefault()
var input1=document.querySelector("#in1").value;
var input2=document.querySelector("#in2").value;
var input3=document.querySelector("#in3").value;
var input4=document.querySelector("#in4").value;
var input5=document.querySelector("#in5").value;
var input6=document.querySelector("#in6").value;
var input7=document.querySelector("#in7").value;
var input8=document.querySelector("#in8").value;

function alldata(a,b,c,d,e,f,g,h){
    this.title=a,
    this.fastname=b,
    this.middlename=c,
    this.lastname=d,
    this.moboleno=e,
    this.email=f,
    this.dateofbirth=g,
    this.aniversary=h
}

var a1=new alldata(input1,input2,input3,input4,input5,input6,input7,input8);
console.log(a1);
userarr.push(a1);
console.log(userarr);



// window.location.href="ch.html"
};

// document.querySelector(".btn2").addEventListener("click" ,function(){
//     window.location.href="ch.html"
// })