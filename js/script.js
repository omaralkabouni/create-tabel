let cols = document.getElementById("cols");
let row = document.getElementById("row");
let btn = document.getElementById("create-btn")
let btnResat = document.getElementById("resat-btn");


btn.addEventListener('click' ,createTable)
btnResat.addEventListener('click', resat);



function resat (){
    let tableRemove = document.querySelectorAll("table");
    console.log("remove")
    tableRemove
}




function createTable(){
if(!row.value  || !cols.value  ){

    console.log("erroe")
}else{

   
        let body = document.body
        let table = document.createElement("table");
    
    
    
        for(let i = 0; i < row.value ;i++){
            let tr =document.createElement("tr");
            table.appendChild(tr);
    
    
            for(let j = 0; j < row.value ;j++){
                let td =document.createElement("td");
                let text = document.createTextNode("item Text")
                td.appendChild(text)
                tr.appendChild(td);
                 
            }
        }
    
        body.appendChild(table);
         
    }
}
