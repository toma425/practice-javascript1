// function ClickCounterGame(){
//     let count = 0;
//     const gameContainer = document.getElementById("game-container");

//     let button1 = document.createElement("button");

//     let button2 = document.createElement("button");

//     let button3 = document.createElement("button");

//     button1.textContent = "+1ボタン";
//     button2.textContent = "+10ボタン";
//     button3.textContent = "リセット";

//     let counter = document.createElement("p");
//     counter.textContent = count;

//     button1.addEventListener("click",function(){
//         if(count < 100){count++;}
//         counter.textContent = count;
//     })

//     button2.addEventListener("click",function(){
//         if(count <= 90){ count = count + 10;}
//         counter.textContent = count;
//     })

//     button3.addEventListener("click",function(){
//         count = 0;
//         counter.textContent = count;
//     })

//     gameContainer.appendChild(button1);
//     gameContainer.appendChild(button2);
//     gameContainer.appendChild(button3);
//     gameContainer.appendChild(counter);
// }
// ClickCounterGame();

function starNumberGuessGame(){
    const gameContainer = document.getElementById("game-container");
    const ramdomNumber = Math.floor(Math.random() * 100) + 1;
    let message = document.createElement("p");
    message.textContent = ramdomNumber;
    let input = document.createElement("input");
    input.type = "number";
    input.placeholder = "好きな数字を入力してください (1 ~ 100)"
    gameContainer.appendChild(message);
    gameContainer.appendChild(input);

    let button = document.createElement("button");
    button.textContent = "確認"

    button.addEventListener("click",function(){
        const val = parseInt(input.value);
        if(ramdomNumber == val){
            message.textContent = "正解"
        }else if (ramdomNumber <  val){
            message.textContent = "大きい"    
        }else{
            message.textContent = "小さい"
        }
    })
    gameContainer.appendChild(button);
}

starNumberGuessGame();