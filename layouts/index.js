//import delivery from "../components/deliver_zip.js";

import nav from "../nav/nav.js"
import logindata from "../login_signup/login.js"
////////////////--------------
/////////////////writing functionality here to display here the data be shown on the page..
var data = JSON.parse(localStorage.getItem("cartarr"));



if (data.length == 0) {
    document.getElementById("container").style.display = `flex`
    document.getElementById("cart-nonempty").style.display = `none`
}




console.log(data)
var renderData = (data) => {

    data.map((ele, index) => {
        let div = document.createElement("div");

        let div_main = document.createElement("div");
        div_main.className = `text-[22px] flex flex-row justify-around  border border-[#353535] p-8 rounded-md  mt-4`;
        div_main.id = `item-container`;

        ///image of the product
        let image_of_the_pro = document.createElement("img");
        image_of_the_pro.src = ele.imageUrl;
        image_of_the_pro.className = `w-[108px] h-[108px]`;

        //details  of  the product
        let product_details = document.createElement("div");
        product_details.className = `ml-4 p-2`;
        product_details.id = `product_details`


        //enter in the product_id container
        let h4_des = document.createElement("h4");
        h4_des.className = `text-white w-[80%] text-lg font-semibold`;
        h4_des.textContent = ele.name;

        //enter in the product_id container
        let product_id = document.createElement("div");
        product_id.className = `flex flex-row`;

        let product_id_div = document.createElement("div");
        product_id_div.className = `text-white mt-2 text-lg font-normal`;
        product_id_div.textContent = `Product Id: 245225`

        let qty_div = document.createElement("div");
        qty_div.className = `text-white mt-2 text-base font-bold ml-10`;
        qty_div.textContent = `QTY : 1`;


        let price_div = document.createElement("div");
        price_div.className = `text-white mt-2 text-lg font-bold`;
        price_div.textContent = `₹ ${(Number(ele.price).toLocaleString("en-IN"))} `;
        let span_div = document.createElement("span");
        span_div.className = `text-sm line-through font-thin ml-4`;
        span_div.textContent = ` ${Number(ele.strikedOffPrice).toLocaleString("en-IN")}`;

        price_div.append(span_div);



        product_id.append(product_id_div, qty_div);

        product_details.append(h4_des, product_id, price_div);

        let delete_icon = document.createElement("div");
        delete_icon.id = `delete_icon_item`
        delete_icon.addEventListener("click", () => {


            ///Delete this item
            for (let i = 0; i < data.length; i++) {
                if (i == index) {
                    data.splice(i, 1);
                    localStorage.setItem("cartarr", JSON.stringify(data))
                    window.location.reload();
                }
            }



        });
        delete_icon.className = `cursor-pointer`;
        delete_icon.id = `delete-item`;
        let i_tag = document.createElement("i");
        i_tag.className = `fa fa-trash-o`;
        i_tag.style.fontSize = `24px`
        i_tag.style.color = `#00967b`;

        delete_icon.append(i_tag);


        div_main.append(image_of_the_pro, product_details, delete_icon);

        div.append(div_main)

        // checking if the items in the container is 1;
        if (index == 0) {
            document.getElementById("index_0").append(div);

        } else if (index == 1) {
            document.getElementById("index_1").append(div);
        } else {
            div.className = `w-[70%] flex-6 flex-col`;
            document.querySelector("#remaining-container").append(div);
        }

    })
}

renderData(data);
////////////////-------------------------------
////////////////-------------------------------

//Adding click funcitionality for the CHECKOUT button
document.getElementById("checkout1").addEventListener("click", () => {
    document.getElementById("address-filling").style.display = "block";
    document.getElementById("cart-nonempty").style.display = "none";
    document.getElementById("remaining-container").style.display = "none";
    // document.getElementById("footerHaiJi").style.display = "none";

})

document.getElementById("checkout2").addEventListener("click", () => {
        document.getElementById("address-filling").style.display = "block";
        document.getElementById("cart-nonempty").style.display = "none";
        document.getElementById("remaining-container").style.display = "none";
        // document.getElementById("footerHaiJi").style.display = "none";
    })
    ////////////////-------------------------------
    ////////////////-------------------------------


// Completing code for the addressing page;


//adding functionality to close the address panel which is opened in the page
document.getElementById("Close-address").addEventListener("click", () => {
    document.getElementById("address-filling").style.display = "none";
    document.getElementById("cart-nonempty").style.display = "block";
    // document.getElementById("footerHaiJi").style.display = "block";
    document.getElementById("remaining-container").style.display = "flex";
})


//summing total amount of items
var sum = 0;
for (let i = 0; i < data.length; i++) {
    sum += Number(data[i].price);
}
document.getElementById("amountOfItems").textContent = `₹ ${sum.toLocaleString("en-IN")}`
document.getElementById("showoffprice1").textContent = `₹ ${sum.toLocaleString("en-IN")}`
document.getElementById("showoffprice2").textContent = `₹ ${sum.toLocaleString("en-US")}`


// document.getElementById("delete_icon_item").addEventListener("click",)

document.getElementById("no_of_Items").textContent = `( ${data.length} items )`;



//adding the navigation bar here

//////

// 
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
let userdropdown = document.querySelector(".userdropdown");
user.onclick = () => {
    if (userdropdown.style.display == "none") {
        dropdownleft.style.display = "none";
        // userdropdown.style.display = "block";
    } else userdropdown.style.display = "none";
};




//updating the cart items 
var cartcount = document.querySelector(".cartcount");
cartcount.style.width = "22px";
cartcount.style.height = "22px"
cartcount.textContent = `${data.length}`;




// now adding functionlity for the saving address of the user and redirecting to the billing page

document.getElementById("save-address").addEventListener("click", () => {
    document.getElementById("save-address").textContent = `CONTINUE`;
    let fn = document.getElementById("fn").value;
    let mb = document.getElementById("mb").value;
    let adnm = document.getElementById("adnm").value;
    let pin = document.getElementById("pin").value;
    let adr1 = document.getElementById("adr1").value;
    let adr2 = document.getElementById("adr2").value;
    let state = document.getElementById("state").value;
    let city = document.getElementById("city").value;

    // if (city == "" || state == "" || adr1 == "" || adr2 == "" || fn == "" || adnm == "" || mb == "" || pin == "") {
    //     alert("Enter full details")
    // } else {
    //     window.location.href = "../billing/card_paynemt.html";
    // }
    window.location.href = "../billing/card_payment.html";

})



////applying the login page functionality


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