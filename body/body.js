//importing starts here

import nav from "../nav/nav.js";
import logindata from "../login_signup/login.js"


// importing ends here
// ////////
document.querySelector("nav").innerHTML = nav();
let menu = document.querySelector(".menu");
let dropdownleft = document.querySelector(".dropdownleft");
menu.onclick = () => {
    if (dropdownleft.style.display == "none") {
        // userdropdown.style.display = "none";
        dropdownleft.style.display = "block";
    } else dropdownleft.style.display = "none";
};
let leftdivs = document.querySelectorAll(".dropdownleft>div");
let rightdivs = document.querySelectorAll(".dropdownright>div");

for (let i = 0; i < leftdivs.length; i++) {
    leftdivs[i].addEventListener("mouseover", () => {
        rightdivs[i].style.display = "flex";
    });
    leftdivs[i].addEventListener("mouseout", () => {
        rightdivs[i].style.display = "none";
    });
}

let user = document.querySelector(".user");
// let userdropdown = document.querySelector(".userdropdown");
// user.onclick = () => {
// if (userdropdown.style.display == "none") {
// dropdownleft.style.display = "none";
// userdropdown.style.display = "block";
// } else userdropdown.style.display = "none";
// };

// updating item for the container  in the navigation bar

var data = JSON.parse(localStorage.getItem("cartarr"))||[];
if(data.length==null){
    var lengthOfCart =0
}
else{
    lengthOfCart=`${data.length}`
}


if(lengthOfCart==null){
    lengthOfCart=0
}

document.querySelector(".cartcount").textContent = lengthOfCart




/////applying functionlaity for the login and signup
/////////
var bodyof = document.querySelector(".loginc");
bodyof.innerHTML = logindata();


document.querySelector(".cross").addEventListener("click", function() {
    var logdi = document.querySelector(".loginc")
    logdi.style.visibility = "hidden";
});


document.querySelector(".user").addEventListener("click", function() {
    var signu = document.querySelector(".loginc")
    signu.style.visibility = "visible";
});

var userprofiledada = JSON.parse(localStorage.getItem("userprofiledata"))
    //console.log(userprofiledada)

// document.querySelector(".butt").addEventListener("click", function() {
//     var mobno = document.getElementById("mobileno").value;
//     var strno = mobno.toString()
//     console.log(strno)


//     validate(userprofiledada, strno);
// })

// function validate(usd, mo) {
//     var a = 0;
//     var y=usd||[]
//     if(y.length==null ||y.length==[]){
//         alert("Invalid details --Please create account")
//     }
//     else{
//     for (var i = 0; i < usd.length; i++) {
//         console.log("ssd", mo)
//         console.log("ss", usd[i].moboleno)
//         if (usd[i].moboleno == mo) {
//             a++;
//         }
//     }

//     if (a >= 1) {
//         alert("login successful")
//         window.location.href = "profile.html";
//     } else {
//         alert("Invalid details --Please create account")
//     }
// }
// }

document.querySelector(".butt").addEventListener("click", function () { 
    var mobno = document.getElementById("mobileno").value;
     var strno = mobno.toString()
 console.log("eee")
 console.log(true)
//  getprofiledata()
  //.......................
 async function getprofiledata() {
let res = await fetch("http://localhost:5501/profile")
let data = await res.json();
console.log("userdata", data)
validate(data, strno); 
 }
 getprofiledata()
 //..................................
//  validate(userprofiledada, strno); 
})
// getprofiledata()
function validate(usd, mo) {
var a = 0;
var y=usd||[]
if(y.length==null ||y.length==[]){
    alert("Invalid details --Please create account")
}
else{
for (var i = 0; i < usd.length; i++) {
   // console.log("ssd", mo)
   // console.log("ss", usd[i].moboleno)
    if (usd[i].mobileno == mo) {
        a++;
    }
}

if (a >= 1) {
    alert("login successful")
    window.location.href = "./index.html";
} else {
    alert("Invalid details --Please create account")
}
}
}