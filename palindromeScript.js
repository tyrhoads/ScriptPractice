const userInput = document.getElementById('text-input');
const checkButton = document.getElementById('check-btn');




function getText(){
    const inputContainer = userInput.value;
    console.log(inputContainer);
    userInput.value="";



}

getText();

checkButton.addEventListener("click", getText);
