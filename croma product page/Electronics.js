import nav from "../nav/nav.js"
import logindata from "../login_signup/login.js"

function fir() {
    document.getElementById("slideimage").src = "https://d2d22nphq0yz8t.cloudfront.net/88e6cc4b-eaa1-4053-af65-563d88ba8b26/https://media.croma.com/image/upload/v1645682862/Croma%20Assets/CMS/Category%20Page%20Banners/Televisions%20and%20Accessories/C997/CP_OnePlus-TV_24Feb2022_rtminq.jpg/mxw_2048,f_auto"
}

function first() {
    document.getElementById("slideimage").src = "https://d2d22nphq0yz8t.cloudfront.net/88e6cc4b-eaa1-4053-af65-563d88ba8b26/https://media.croma.com/image/upload/v1643719339/Croma%20Assets/CMS/CAtegory/CP_HisenseTelevisions_01Feb2022_esxsg7.jpg/mxw_2048,f_auto"
}

function second() {
    document.getElementById("slideimage").src = "https://d2d22nphq0yz8t.cloudfront.net/88e6cc4b-eaa1-4053-af65-563d88ba8b26/https://media.croma.com/image/upload/v1644828037/Croma%20Assets/CMS/CP_Iffalcon-SmartTV_14-Feb-2022_jr8lcz.jpg/mxw_2048,f_auto"
}

function third() {
    document.getElementById("slideimage").src = "https://d2d22nphq0yz8t.cloudfront.net/88e6cc4b-eaa1-4053-af65-563d88ba8b26/https://media.croma.com/image/upload/v1644254466/Croma%20Assets/CMS/Homepage%20Banners/Other/CP_OnePlusSmart-TV_07Feb2022_qagzxd.jpg/mxw_2048,f_auto"
}
setInterval(fir, 2000)
setInterval(first, 4000);
setInterval(second, 6000);
setInterval(third, 8000);




///////////
// adding  the navagation bar
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



/////appliying login functionlity for the page

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

document.querySelector(".butt").addEventListener("click", function() {
    var mobno = document.getElementById("mobileno").value;
    var strno = mobno.toString()
    console.log(strno)


    validate(userprofiledada, strno);
})

function validate(usd, mo) {
    var a = 0;
    var y=usd||[]
    if(y.length==null ||y.length==[]){
        alert("Invalid details --Please create account")
    }
    else{
    for (var i = 0; i < usd.length; i++) {
        console.log("ssd", mo)
        console.log("ss", usd[i].moboleno)
        if (usd[i].moboleno == mo) {
            a++;
        }
    }

    if (a >= 1) {
        alert("login successful")
        window.location.href = "profile.html";
    } else {
        alert("Invalid details --Please create account")
    }
}
}