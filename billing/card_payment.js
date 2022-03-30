// import nav from "../nav/nav.js"

var cartData = JSON.parse(localStorage.getItem("cartarr"));

function pay() {
    let selext = document.querySelector("#card_type").value;
    let cardNumber = document.querySelector("#card_number").value;
    let cvv = document.querySelector("#cvv").value;
    let expdate = document.querySelector("#exp_date").value;


    if (selext == "" || cardNumber == "" || cvv == "" || expdate == "") {
        alert("Please Enter valid Card Details!");
        window.location.href = "card_payment.html"
    } else {
        alert("Payment Done!");
        location.href = "../index.html"

        cartarr = [];
        localStorage.setItem(JSON.stringify(cartarr));

    }


}

function cardType() {
    let value = document.querySelector("#card_type").value;
    return value;
}

////applying navbar
// document.querySelector("nav").innerHTML = nav();
// let menu = document.querySelector(".menu");
// let dropdownleft = document.querySelector(".dropdownleft");
// menu.onclick = () => {
//     if (dropdownleft.style.display == "none") { //
//         userdropdown.style.display = "none";
//         dropdownleft.style.display = "block";
//     } else dropdownleft.style.display = "none";
// };
// let leftdivs = document.querySelectorAll(".dropdownleft>div");
// let rightdivs = document.querySelectorAll(".dropdownright>div");
// for (let i = 0; i <
//     leftdivs.length; i++) {
//     leftdivs[i].addEventListener("mouseover", () => { rightdivs[i].style.display = "flex"; });
//     leftdivs[i].addEventListener("mouseout", () => { rightdivs[i].style.display = "none"; });
// }
// let user = document.querySelector(".user");
// let userdropdown = document.querySelector(".userdropdown");
// user.onclick = () => {
//     if (userdropdown.style.display == "none") {
//         dropdownleft.style.display = "none";
//         userdropdown.style.display = "block";
//     } else userdropdown.style.display = "none";
// };