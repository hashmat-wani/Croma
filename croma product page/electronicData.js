var data;
async function getproduct() {
    let res = await fetch("http://localhost:5501/product")
     data = await res.json();
    console.log("dproduct", data)
    displayData(data)
}
getproduct()



// /Adding the script tag
// 
var cartarr = JSON.parse(localStorage.getItem("cartarr")) || []

//displayData(electronicsData)

function handlePricesort() {
    var selected = document.querySelector("#pricesort").value;
    if (selected == "high") {
        ele_data.sort(function(a, b) {
            return Number(b.price) - Number(a.price);
        })
    }
    if (selected == "low") {
       // electronicsData.sort(function(a, b) {
        data.sort(function(a, b) {
            return Number(a.price) - Number(b.price)
        })
    }
    //displayData(electronicsData)
    displayData(data)
}


function filterCat() {
    var selected = document.querySelector("#brandfilter").value;
    console.log(selected)

    // var filteredlist = electronicsData.filter(function(elem) {
        var filteredlist = data.filter(function(elem) {
        return elem.brand == selected;
    })

    displayData(filteredlist)
}






function displayData(ele_data) {
    console.log(ele_data)
    document.querySelector(".items").innerHTML = "";
    ele_data.map(function(data) {
        var div = document.createElement("div")
        div.setAttribute("id", "flex");

        var div1 = document.createElement("div")
        div1.setAttribute("id", "d1")

        var image = document.createElement("img")
        image.setAttribute("src", data.imageUrl)
        image.setAttribute("id", "images")

        div1.append(image)

        var div2 = document.createElement("div")
        div2.setAttribute("id", "d2")

        var name = document.createElement("h2");
        name.textContent = data.name

        var id = document.createElement("p")
        id.textContent = "Product Id:" + " " + Math.round(Math.random() * 203145)
        id.setAttribute("id", "id")



        var div4 = document.createElement("div");
        div4.setAttribute("id", "id1")

        var p1 = document.createElement("h2");
        p1.textContent = "₹" + Number(data.price).toLocaleString("en-IN")
        p1.style.color = "white"

        var p2 = document.createElement("h5");
        p2.textContent = "₹" + data.strikedOffPrice
        p2.style.color = "gray"
        p2.style.textDecoration = "line-through"
        p2.setAttribute("id", "p2")

        var btn3 = document.createElement("button")
        btn3.textContent = Math.round(Math.random() * 40) + "%"
        btn3.setAttribute("id", "btn3")

        var brand = document.createElement("h1");
        brand.textContent = data.brand
        brand.style.color = "white"

        var div5 = document.createElement("div")
        div5.setAttribute("id", "id2")

        var ch = document.createElement("h4")
        ch.textContent = "COMPARE";
        ch.style.color = "white"

        var c = document.createElement("h4")
        c.textContent = "CONTECT TO STORE"
        c.style.color = "white"

        var free = document.createElement("p")
        free.textContent = "Free Delivery by"
        free.style.color = "white"

        var free1 = document.createElement("p")
        free1.textContent = "Tomorrow 400049"
        free1.style.color = "rgb(11, 156, 117)"
        free1.style.marginTop = "-10px"

        var div6 = document.createElement("div")
        div6.setAttribute("id", "id3")

        var btn = document.createElement("button");
        btn.textContent = "BUY NOW";
        btn.style.cursor = "pointer"
        btn.setAttribute("id", "btn")

        var btn1 = document.createElement("button")
        btn1.textContent = "ADD TO CART"
        btn1.style.cursor = "pointer"
        btn1.setAttribute("id", "btn1")
        btn1.addEventListener("click", function() {
            addtocart(data)
        })

        function addtocart(data) {
            console.log(data)
            cartarr.push(data);
            document.querySelector(".cartcount").textContent = cartarr.length;
            localStorage.setItem("cartarr", JSON.stringify(cartarr))
            alert("Succecfull")
                // window.location.href = "Cart.html"
        }

        div6.append(btn, btn1)

        div5.append(ch, c)

        div4.append(p1, p2, btn3)

        div2.append(name, id, div4, brand, div5, free, free1, div6, )

        div.append(div1, div2);

        document.querySelector(".items").append(div)

    })






}
//updating the car count

document.querySelector(".cartcount").textContent = cartarr.length;

document.querySelector(".cart").addEventListener("click", (e) => {
    e.preventDefault();
    window.location.href = `../layouts/cart.html`
})










document.getElementById("underlinetext1").addEventListener("click", function() {
    window.location.href = "products.html"
})
document.getElementById("underlinetext2").addEventListener("click", function() {
    window.location.href = "products.html"
})
document.getElementById("underlinetext3").addEventListener("click", function() {
    window.location.href = "products.html"
})
document.getElementById("underlinetext4").addEventListener("click", function() {
    window.location.href = "products.html"
})
document.getElementById("underlinetext5").addEventListener("click", function() {
    window.location.href = "products.html"
})
document.getElementById("underlinetext6").addEventListener("click", function() {
    window.location.href = "products.html"
})
document.getElementById("underlinetext7").addEventListener("click", function() {
    window.location.href = "products.html"
})
document.getElementById("underlinetext8").addEventListener("click", function() {
    window.location.href = "products.html"
})
document.getElementById("underlinetext9").addEventListener("click", function() {
    window.location.href = "products.html"
})
document.getElementById("underlinetext10").addEventListener("click", function() {
    window.location.href = "products.html"
})
document.getElementById("underlinetext11").addEventListener("click", function() {
    window.location.href = "products.html"
})
document.getElementById("blackicon1").addEventListener("click", function() {
    window.location.href = "https://www.facebook.com/CromaRetail/"
})
document.getElementById("blackicon2").addEventListener("click", function() {
    window.location.href = "https://twitter.com/cromaretail?s=11"
})
document.getElementById("blackicon3").addEventListener("click", function() {
    window.location.href = "https://www.youtube.com/user/CromaRetail"
})
document.getElementById("blackicon4").addEventListener("click", function() {
    window.location.href = "https://www.instagram.com/croma.retail/"
})
document.getElementById("blackicon5").addEventListener("click", function() {
    window.location.href = "https://www.pinterest.com/cromaretail/"
})
document.getElementById("blackicon1").addEventListener("click", function() {
    window.location.href = "https://www.facebook.com/CromaRetail/"
})
document.getElementById("footerwidetext1").addEventListener("click", function() {
    window.location.href = "products.html"
})
document.getElementById("footerwidetext2").addEventListener("click", function() {
    window.location.href = "products.html"
})
document.getElementById("footerwidetext3").addEventListener("click", function() {
    window.location.href = "products.html"
})
document.getElementById("footerwidetext4").addEventListener("click", function() {
    window.location.href = "products.html"
})
document.getElementById("footerwidetext5").addEventListener("click", function() {
    window.location.href = "products.html"
})
document.getElementById("footerwidetext6").addEventListener("click", function() {
    window.location.href = "products.html"
})
document.getElementById("footerwidetext7").addEventListener("click", function() {
    window.location.href = "products.html"
})
document.getElementById("footer5widetext1").addEventListener("click", function() {
    window.location.href = "products.html"
})
document.getElementById("footer5widetext2").addEventListener("click", function() {
    window.location.href = "products.html"
})
document.getElementById("footer5widetext3").addEventListener("click", function() {
    window.location.href = "products.html"
})
document.getElementById("footer5widetext4").addEventListener("click", function() {
    window.location.href = "products.html"
})
document.getElementById("footer5widetext5").addEventListener("click", function() {
    window.location.href = "products.html"
})
document.getElementById("footerbox5heading").addEventListener("click", function() {
    window.location.href = "products.html"
})