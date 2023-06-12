const col = document.querySelectorAll(".col");
const text = document.getElementById("turn-text");
const winning = document.getElementById("winning-text");

let board = [];
let start = Math.floor(Math.random()*3);
start = start % 2 == 0 ? "cross" : "circle";
text.textContent = `${start}'s turn`;
let wins = false;

    col.forEach((element)=>{
        element.addEventListener("click",()=>{
            let child = element.firstElementChild;
            if(!child && !wins){
                let turnText =  text.textContent == "circle's turn"? "cross": "circle";
                text.textContent = `${turnText}'s turn`;
                console.log(element.id);
            }
    
            let div = document.createElement("div");
            if(!board.length){
                board[element.id] = start;
                div.classList.add(start);
                element.appendChild(div);
                
            }
            else{
                if(!child && !wins){
                    start = "circle" == start? "cross": "circle";
                    div.classList.add(start);
                    board[element.id] = start;
                    element.appendChild(div);
                    checkWinnings();
                }
            }
            console.log(board);
         })
    })



function checkWinnings(){
    console.log("hello");
    for(let i=0; i<board.length; i++){
        if(i==0 || i==3 || i==6){
            if(board[i] == board[i+1] && board[i] == board[i+2]){
                if(board[i] == "circle" || board[i] == "cross"){
                    
                    wins = true;
                }
            }
        }

        if(i==0 || i==1 || i==2){
            if(board[i] == board[i+3] && board[i] == board[i+6]){
                if(board[i] == "circle" || board[i] == "cross"){

                    wins = true;
                }
            }
        }
    }

    if(board[0] == board[4] && board[0] == board[8]){
        if(board[0] == "circle" || board[0] == "cross"){
            wins = true;
        }
    }
    if(board[2] == board[4] && board[2] == board[6]){
        if(board[2] == "circle" || board[2] == "cross"){
            wins = true;
        }
    }


    let tempArray = board.filter(element => element !== "");
    if(tempArray.length == 9 && !wins){
        winning.textContent = "Draw";
    }
    if(wins) winning.textContent = `${start} Wins`;
}

