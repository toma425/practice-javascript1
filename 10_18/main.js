const gameSelector = document.getElementById("game-selector");
const gameContainer = document.getElementById("game-container");

gameContainer.textContent="ゲームを選ぶとここに表示されます"

gameSelector.addEventListener("change",function(){
    gameContainer.innerHTML = "";
    switch(gameSelector.value){
      case "none":
        gameContainer.textContent="ゲームを選ぶとここに表示されます"
        break;
      case "click-counter":
        ClickCounterGame();
        break;
      case "number-guess":
        NumberGuessGame();
        break;

    }
})

function NumberGuessGame(){
  const randomNumber = Math.floor(Math.random()*100)+1;
  let message = document.createElement("p");
  let input = document.createElement("input");
  input.type = "number";
  input.max = 100;
  input.min = 0;
  input.placeholder = "好きな数字を入力してください"
  let button = document.createElement("button");
  button.textContent = "予想"
  button.addEventListener("click",function(){
    const userGuess = parseInt(input.value);
    if(userGuess === randomNumber){
      message.textContent = "正解"
    }else if(userGuess > randomNumber){
      message.textContent = "値が高いよ！"
    }else{
      message.textContent = "値がちいさいよ！"
    }
  })
  gameContainer.appendChild(input);
  gameContainer.appendChild(button);
  gameContainer.appendChild(message);
}

function ClickCounterGame(){
  let count = 0;
  //const gameContainer = document.getElementById("game-container");

  let button1 = document.createElement("button");
  button1.textContent = "+1ボタン";

  let button2 = document.createElement("button");
button2.textContent = "+10ボタン"


  let counter = document.createElement("P");
  counter.textContent = count;

  button1.addEventListener("click",function(){
    count++;
    counter.textContent = count;
  })

  button2.addEventListener("click",function(){
    count=count+10;
    counter.textContent = count;
  })

  gameContainer.appendChild(button1);
  gameContainer.appendChild(button2);
  gameContainer.appendChild(counter);
}
