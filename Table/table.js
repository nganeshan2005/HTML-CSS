let myTable = document.getElementById("my-table");
let th = myTable.getElementsByTagName("th");
let thArray = Array.from(th);
console.log(th);
let thHolder = document.querySelectorAll(".holder");



// Column Resizer
for(var i = 0; i < thHolder.length; i++){

    thHolder[i].addEventListener('mousedown', function(e){
        let targetTh = e.target.parentElement.parentElement
        let computedWidth = window.getComputedStyle(targetTh).width;
        let sliced = parseInt(computedWidth.slice(0, -2), 0);
        let mouseStart = e.clientX;

        function resize(e){
            let mouseTravel = -mouseStart + e.clientX;
            targetTh.style.width = (sliced + mouseTravel) + 'px';
           
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
    document.addEventListener('click', function(e){
        e.stopPropagation();
        e.preventDefault();
            console.log(e.target)
        
    }, false)
    
}