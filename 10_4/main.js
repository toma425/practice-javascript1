
 function errorInput(){
    const month = document.getElementById("month").value;
    const day = document.getElementById("day").value;
    if(month<1 || month>12){
      alert("適切な値ではありません");
      return
    }
    console.log("month:",month,"day:",day)
    
 }

 const monthSrect = document.getElementById("month");
 monthSelectlist();
 function monthSelectlist(){
   for (let i=1;i<=12;i++){
      let option = document.createElement("option");
      option.value = i;
      option.textContent = i + "月";
      monthSelectlist.appendChild(option);
   }
 }