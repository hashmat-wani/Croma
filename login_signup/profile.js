//var userarr=[];

//import { post } from "../express/controllers/userprofile.controller.js"
import nav from "../nav/nav.js"





// var userarr = JSON.parse(localStorage.getItem("userprofiledata"))
// if (userarr == null) {
//     userarr = []
// } else {
//     var userarr = JSON.parse(localStorage.getItem("userprofiledata"))
// }
// document.querySelector(".btn2").addEventListener("click", userpro)

// function userpro(event) {
//     event.preventDefault()
//     var input1 = document.querySelector("#in1").value;
//     var input2 = document.querySelector("#in2").value;
//     var input3 = document.querySelector("#in3").value;
//     var input4 = document.querySelector("#in4").value;
//     var input5 = document.querySelector("#in5").value;
//     var input6 = document.querySelector("#in6").value;
//     var input7 = document.querySelector("#in7").value;
//     var input8 = document.querySelector("#in8").value;

//     function alldata(a, b, c, d, e, f, g, h) {
//         this.title = a,
//             this.fastname = b,
//             this.middlename = c,
//             this.lastname = d,
//             this.moboleno = e,
//             this.email = f,
//             this.dateofbirth = g,
//             this.aniversary = h
//     }

//     var a1 = new alldata(input1, input2, input3, input4, input5, input6, input7, input8);
//     console.log(a1);
//     userarr.push(a1);
//     console.log(userarr);


//     localStorage.setItem("userprofiledata", JSON.stringify(userarr));
//     window.location.href = "../layouts/cart.html"
// };




// var userarr = JSON.parse(localStorage.getItem("userprofiledata"))
// if (userarr == null) {
//     userarr = []
// } else {
//     var userarr = JSON.parse(localStorage.getItem("userprofiledata"))
// }
 document.querySelector(".btn2").addEventListener("click", userpro)

 async function userpro () {
   // event.preventDefault()
   console.log("true")
    var input1 = document.querySelector("#in1").value;
    var input2 = document.querySelector("#in2").value;
    var input3 = document.querySelector("#in3").value;
    var input4 = document.querySelector("#in4").value;
    var input5 = document.querySelector("#in5").value;
    var input6 = document.querySelector("#in6").value;
    var input7 = document.querySelector("#in7").value;
    var input8 = document.querySelector("#in8").value;
try {
     await fetch('http://localhost:5501/profile',{
        method:"POST",
       
        body:JSON.stringify({
           
                "title":input1,
                "firstname":input2,
                "middlename":input3,
                "lastname":input4,
                "mobileno":input5,
                "emailid":input6,
                "dateofbirth":input7,
                "dateofaniversary":input8
            
            
        }),
        headers:{
            "Content-Type":"application/json",
           
        },
    });

    
    
} catch (error) {
    console.log(error)
}
} 
 

    


//     localStorage.setItem("userprofiledata", JSON.stringify(userarr));
//     window.location.href = "../layouts/cart.html"
//};

// async function translateText(){
//     let input =document.querySelector("#input-text").value;

//     let res = await post('http://localhost:5501/profile',{
//         method:"POST",
//         // body:JSON.stringify({
//         //     q:input,
//         //     source:"en",
//         //     target:`${x}`,
//         //     format:"text"
//         // }),
//         // headers:{
//         //     accept:"application/json",
//         //     "Content-Type":"application/x-www-form-urlencoded",
//         // },{}
//         body:JSON({
           
//                 "title":input1,
//                 "firstname":"sinput2",
//                 "middlename":input1,
//                 "lastname":input1,
//                 "mobileno":input1,
//                 "emailid":input1,
//                 "dateofbirth":input1,
//                 "dateofaniversary":input1
            
            
//         }),
//         headers:{
//             "Content-Type":"application/json",
           
//         },
//     });

// document.querySelector(".btn2").addEventListener("click" ,function(){
//     window.location.href="electronics.html"
// })

/////adding navbar here
// ////////////-------------------------------
document.querySelector("nav").innerHTML = nav();
let menu = document.querySelector(".menu");
let dropdownleft = document.querySelector(".dropdownleft");
menu.onclick = () => {
    if (dropdownleft.style.display == "none") { //
        userdropdown.style.display = "none";
        dropdownleft.style.display = "block";
    } else dropdownleft.style.display = "none";
};
let leftdivs = document.querySelectorAll(".dropdownleft>div");
let rightdivs = document.querySelectorAll(".dropdownright>div");
for (let i = 0; i <
    leftdivs.length; i++) {
    leftdivs[i].addEventListener("mouseover", () => { rightdivs[i].style.display = "flex"; });
    leftdivs[i].addEventListener("mouseout", () => { rightdivs[i].style.display = "none"; });
}
 let user = document.querySelector(".user");
 let userdropdown = document.querySelector(".userdropdown");
user.onclick = () => {
    if (userdropdown.style.display == "none") {
        dropdownleft.style.display = "none";
        userdropdown.style.display = "block";
    } else userdropdown.style.display = "none";
};




// updating cart functionality
let dataofItem = JSON.parse(localStorage.getItem("cartarr"));
// console.log(dataofItem)
document.querySelector(".cartcount").textContent = dataofItem.length