const col = document.querySelectorAll(".col");
const text = document.getElementById("turn-text");
const winning = document.getElementById("winning-text");

let board = [];
let start = Math.floor(Math.random()*3);
start = start % 2 == 0 ? "cross" : "circle";
text.textContent = `${start}'s turn`;

col.forEach((element)=>{

    element.addEventListener("click",()=>{
        let child = element.firstElementChild;
        if(!child){
            let turnText =  text.textContent == "circle's turn"? "cross": "circle";
            text.textContent = `${turnText}'s turn`;
        }

        let div = document.createElement("div");
        if(!board.length){
            board.push(start);
            div.classList.add(start);
            element.appendChild(div);
        }
        else{
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
    for(let i=0; i<board.length; i++){
        if(i == 0 || i == 3 || i == 6){
            if(board[i] == board[i+1] && board[i] == board[i+2]){
                if(board[0] == "circle") winning.textContent = "circle wins";
                else winning.textContent = "cross wins";
            }
        }
    }
    console.log("hello")
    if(board.length == 9){
        winning.textContent = "Draw";
    }
}