



let myTable = document.getElementById("my-table"),
    th = myTable.getElementsByTagName("th"),
    thArray = Array.from(th),
    thHolder = document.querySelectorAll(".holder");



// Column Resizer
for(var i = 0; i < thHolder.length; i++){

    thHolder[i].addEventListener('mousedown', function(e){
        let targetTh = e.target.parentElement
        let computedWidth = window.getComputedStyle(targetTh).width;
        let tableComputedWidth = window.getComputedStyle(myTable).width;
        let sliced = parseInt(computedWidth.slice(0, -2), 0);
        let tableSliced = parseInt(tableComputedWidth.slice(0, -2), 0);
        let mouseStart = e.clientX;
        console.log(e.target);
        function resize(e){
            let mouseTravel = -mouseStart + e.clientX;
            targetTh.style.width = (sliced + mouseTravel) + 'px';
            myTable.style.width = (tableSliced + mouseTravel) + 'px'
           
            document.addEventListener('mouseup', function(){
                document.removeEventListener('mousemove', resize);
            })
        }
        document.addEventListener('mousemove', resize);
    })
}

//on Click Column Selector
if( myTable.classList.contains("column-highlight") ){
    let target, thChild, tdChild;
    //get clicked target
    document.addEventListener('click', function(e){
        target = e.target;
        
        let findParent = target.parentElement.children;
        let arrayOfParent = Array.from(findParent);
        let targetsIndex = arrayOfParent.indexOf(target) + 1 ;

        thChild = myTable.querySelectorAll("tr th:nth-child(" + targetsIndex + ")");
        tdChild = myTable.querySelectorAll("tr td:nth-child(" + targetsIndex + ")");
        restTds = myTable.querySelectorAll("tr td:not(:nth-child(" + targetsIndex + ")");
        restThs = myTable.querySelectorAll("tr th:not(:nth-child(" + targetsIndex + ")");
        
        function colorMe(x){   
            /* x.style.backgroundColor = 'rgba(255, 207, 22, .33)';
            x.style.color = "#333" */
            x.classList.add('click-highlight');
        }
        tdChild.forEach(colorMe);
        thChild.forEach(colorMe);

        function removeColor(y){
            /* y.style.backgroundColor = '';
            y.style.color = "" */
            y.classList.remove('click-highlight');
        }
        restTds.forEach(removeColor);
        restThs.forEach(removeColor);
    }) 

    // Need improvement on Outside click no selection.
    // Th click also should select entire column
    
}



//Fihed Header and Selected Rows and columns

    if (myTable.classList.contains("freeze-header")){
        let container = document.getElementById("table-container");
        function xy (){
            scrollAmt = container.scrollTop;
            let frozenElem = myTable.getElementsByClassName("frozen");
            for(var i=0; i<frozenElem.length; i++){
                frozenElem[i].style.top = scrollAmt + "px"; 
            }
        }
        container.addEventListener("scroll", xy)
    
    } else{
        console.log("\"Freeze-Header\" Class not available to table")
    }



//give average calculated width th column
let widthAuto = function(table){
    let widthArr = [];
    let th = Array.from (table.querySelectorAll('thead th'));
    
    let cols = [];
    for(var i=0; i < th.length; i++ ){
        tds = Array.from(table.querySelectorAll(`tbody > tr td:nth-child(${i +1})`));
        ths = Array.from(table.querySelectorAll(`thead th:nth-child(${i +1})`))
        cols.push(tds);
        cols[i].push(ths[0])
    }
    let avgWidthArr = [];
    cols[1].forEach(function(x){
        
        console.log(x)
    })
    for(var i=0; i < cols.length; i++ ){
        
    }
    console.log(cols[1][0].offsetWidth)
    console.log(cols[1][1].offsetWidth)
}
    /* let x = th.offsetWidth;
        tds.forEach(function(td){
            let tdWidth = td.offsetWidth;
            widthArr.push(tdWidth)
        })
        widthArr.push(x);
    let avgWidth = function(arr){
        let totalWidth = 0;
            arr.forEach(function(val){
                totalWidth += val
            })
        return totalWidth / arr.length;
    }
    let total = avgWidth(widthArr);
    th.style.width = (total / 2) + 'px'
    console.log(tds[2])
} */
widthAuto(myTable);
//Tooltips
//Row collapse
//Check Boxes and Selection
