"use strict";

function createTable(cols, rows){
    let table = document.createElement('table');
    table.id = "table";
    
    for(let i = 1; i <= cols; i++){
        let tr = document.createElement('tr');
    
        for(let j = 1; j <= rows; j++){
            let td = document.createElement('td');
            td.innerHTML = i + ":" + j;
            tr.append(td);
        }
        table.append(tr);
    }
    document.body.append(table);
}

function changeColorElementOfTable(idName, color1 = "yellow", color2 = "blue"){
    if(document.getElementById(idName)){
        let tb = document.getElementById(idName);
        for(let i = 0, j = tb.rows.length - 1; i < tb.rows.length; i++, j--){
            tb.rows[i].cells[i].style.backgroundColor = color1;
            tb.rows[i].cells[j].style.backgroundColor = color2;
        }
    
    }
}

//changeColorElementOfTable("table1");
table1.hidden = true;
//createTable(11,11);
//changeColorElementOfTable("table", "red", "green");


