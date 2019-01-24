let myTable = document.getElementById("my-table");
let th = myTable.getElementsByTagName("th");
let fixedHeader = document.getElementsByClassName('fixed-header');
let thArray = Array.from(th);

let thHolder = document.querySelectorAll(".holder");
let holder, targetTh, sliced, mouseMove;
for(var i = 0; i < thHolder.length; i++){
    holder = thHolder[i];
    holder.addEventListener('mousedown', function(e){
        targetTh = e.target.parentElement.parentElement
        let computedWidth = window.getComputedStyle(targetTh).width;
        //since table th width is auto not able to capture its value so assigning computed width
        let str = computedWidth
            sliced = parseInt(str.slice(0, -2), 0);
        let mouseStart = e.clientX;
        document.addEventListener('mousemove', function(e){
            mouseTravel = (-mouseStart + e.clientX);
            targetTh.style.width = (sliced + mouseTravel) + "px";

            document.addEventListener('mouseup', function(){
                console.log("mouseup")
                document.removeEventListener('mousemove', function(){
                    console.log("working");
                })
            })

        return mouseTravel;
        });
        return holder;
    })

}



/* let mouseMove;
function calculateMouseMove(){
    let mouseInitialPosition = 0;
    myTable.addEventListener('mousedown', function(e){
        mouseInitialPosition = e.clientX;
        console.log(mouseInitialPosition)
    });

    let mouseNewPosition = 0;
    myTable.addEventListener('mouseup', function(e){
        mouseNewPosition = e.clientX;
        console.log(mouseNewPosition);
        mouseMove = mouseNewPosition - mouseInitialPosition;
        console.log(mouseMove);
    })
    console.log(mouseMove);
    return mouseMove;
};
calculateMouseMove();


for(var i = 0; i < thHolder.length; i++){
    thHolder[i].addEventListener('drag', function(e){
        let targetTH = e.target.parentElement.parentElement;
        let thWidth = window.getComputedStyle(targetTH).width;
        let getCurrentWidth = parseInt(targetTH.style.width);

        
        console.log(getCurrentWidth);
        targetTH.style.width = getCurrentWidth + (mouseMove) + 'px';
        console.log(mouseMove);

        }
            
    )}
 */



console.log();