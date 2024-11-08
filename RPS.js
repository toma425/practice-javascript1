function RPS(){
    const choices = ["gu","choki","pa","muteki"];
    // この書き方は、配列です。c言語参照
    // let select = document.createElement("select");
    // let option1 = document.createElement("option");
    // let option2 = document.createElement("option");
    // let option3 = document.createElement("option");
    // const gu = "gu"
    // option1.value = gu;
    // option1.textContent = gu;
    // select.appendChild(option1);
    // option2.value = choki;
    // option2.textContent = choki;
    // select.appendChild(option2);
    // option3.value = pa;
    // option3.textContent = pa;
    // select.appendChild(option);
    // gameContainer.appendChild(select3);
    
    let select = document.createElement("select");
    choices.forEach(choice => {
        let option = document.createElement("option");
        option.value = choice;
        option.textContent = choice;
        select.appendChild(option);
    });
    gameContainer.appendChild(select);


    let image = document.createElement("img");
    image.alt = "Choice";
    image.style.width = "220px";
    image.style.height = "220px";
    image.src = "https://th.bing.com/th/id/OIP.80e9IkJ-JtYFYamsZ5HsJQAAAA?w=152&h=155&c=7&r=0&o=5&pid=1.7"
    gameContainer.appendChild(image);

    //forEach 配列など複数のデータがあるもの使える。全部やる関数。
    //配列.forEach(配列の中身 => {命令})
}