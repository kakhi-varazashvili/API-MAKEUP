
let table = document.querySelector("table")

fetch("https://makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline")

.then(x=> x.json())
.then(array=>{
    for(var i = 0; i<50; i++){

        let tmp = ` <div><tr>
        <td>${array[i].brand}</td>
        <td>${array[i].price}</td>
        <td>${array[i].name}</td>
        <td>${array[i].description}</td>
        <td>${array[i].product_type}</td>
        </tr>
        </div>
        `
        table.innerHTML += tmp}
    
    })