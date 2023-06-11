const col = document.querySelectorAll(".col");
const text = document.getElementById("turn-text");


let board = [];
let start = Math.floor(Math.random()*3);
start = start % 2 == 0 ? "cross" : "circle";
console.log(start);
text.textContent = `${start}'s turn`;
col.forEach((element)=>{
    element.addEventListener("click",()=>{
        let div = document.createElement("div");
        if(!board.length){
            board.push(start);
            div.classList.add(start);
            element.appendChild(div);
        }
        else{
            let child = element.firstElementChild;
            if(!child){
                start = "circle" == board[board.length - 1]? "cross": "circle";
                div.classList.add(start);
                board.push(start);
                element.appendChild(div);
                checkWinnings();
            }
        }
 
     })
})

function checkWinnings(){

}