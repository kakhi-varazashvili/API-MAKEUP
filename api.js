let tb = document.querySelector("table")

let select = document.querySelector("select")
fetch("https://api2.binance.com/api/v3/ticker/24hr")
.then(x=> x.json())
.then(arr =>{
    // console.log(arr)
    for(var i = 0; i < 20   ; i++){
       let tmp = ` <tr>       
       <td class="all">${arr[i].symbol}</td>  
       <td class="all">${arr[i].lowPrice}</td>       
       <td class="all">${arr[i].highPrice}</td>   
       </tr>       
       `       
       tb.innerHTML += tmp}
})


select.addEventListener("change", function(){


    fetch("https://api2.binance.com/api/v3/ticker/24hr")
        .then(x=> x.json())
            .then(arr =>{
                console.log(arr)

        for(var n = 0; n < 20; n++){
            if(select.value =="all"){                    
    let tmp = ` <tr>       
       <td class="all">${arr[n].symbol}</td>  
       <td class="all">${arr[n].lowPrice}</td>       
       <td class="all">${arr[n].highPrice}</td>   
       </tr>       
       `       
       tb.innerHTML += tmp
            
        }
            if(select.value =="max" && arr[n].highPrice>1){                    
    let tmp = ` <tr>       
       <td class="max">${arr[n].symbol}</td>  
       <td class="max">${arr[n].lowPrice}</td>       
       <td class="max">${arr[n].highPrice}</td>   
       </tr>       
       `       
       tb.innerHTML += tmp
            
        }
            if(select.value =="min" && arr[n].highPrice<1){                    
    let tmp = ` <tr>       
       <td class="min">${arr[n].symbol}</td>  
       <td class="min">${arr[n].lowPrice}</td>       
       <td class="min">${arr[n].highPrice}</td>   
       </tr>       
       `       
       tb.innerHTML += tmp
            
        }
    }
})
            })