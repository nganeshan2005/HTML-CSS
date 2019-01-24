let myTable = document.getElementById("my-table");
let th = myTable.getElementsByTagName("th");
let fixedHeader = document.getElementsByClassName('fixed-header');
let thArray = Array.from(th);

let thHolder = document.querySelectorAll(".holder");

let mouseMove;
function calculateMouseMove(){
    let mouseInitialPosition = 0;
    myTable.addEventListener('mousedown', function(e){
        mouseInitialPosition = e.clientX;
        console.log(mouseInitialPosition)
    });

    let mouseNewPosition = 0;
    myTable.addEventListener('mouseup', function(e){
        mouseNewPosition = e.clientX;
        /* console.log(mouseNewPosition); */
        mouseMove = mouseNewPosition - mouseInitialPosition;
        /* console.log(mouseMove); */
    })
    /* console.log(mouseMove); */
    return mouseMove;
};
calculateMouseMove();


for(var i = 0; i < thHolder.length; i++){
    thHolder[i].addEventListener('mousedown', function(e){
        let targetTH = e.target.parentElement.parentElement;
        let thWidth = window.getComputedStyle(targetTH).width;
        let getCurrentWidth = parseInt(targetTH.style.width);

        
        console.log(getCurrentWidth);
        targetTH.style.width = getCurrentWidth + (mouseMove) + 'px';
        console.log(mouseMove);

        }
            
    )}




console.log();