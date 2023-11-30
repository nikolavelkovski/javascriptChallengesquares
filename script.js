const squares = document.querySelectorAll('.squares')




for (const square of squares) {
    console.log(square,"Square")
    square.addEventListener("click",updateSquare)
}
const array_clicked = []
function updateSquare(event){
    const square = event.target;
    square.style.backgroundColor = 'green'
    array_clicked.push(square.id)
    if(square.id == '6'){
        reverseOrder(array_clicked)
    }
}   

function reverseOrder(array_clicked){
    for (let i = array_clicked.length - 1; i >= 0; i--) {
        const element = document.getElementById(array_clicked[i])
        setTimeout(() => {
          
            element.style.backgroundColor = 'white';
        }, i * 300)
        
    }
}

