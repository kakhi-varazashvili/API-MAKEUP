
let main = document.querySelector(".main")

fetch("https://makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline")

.then(x=> x.json())
.then(array=>{
    for(var i of array){

        let tmp = ` <div class="card">
        <h3>${"Brand: <span style=color:blue> "+i.brand}</h3>
        <h3>${"Price: <span style=color:blue> "+i.price}</h3>
        <h3>${"Name: <span style=color:blue> "+i.name}</h3>
        <h3>${"Description: <span style=color:blue> "+i.description}</h3>
        <h3>${"Product Type: <span style=color:blue> "+i.product_type}</h3>
     </div>
        `
        main.innerHTML += tmp}
    
    })