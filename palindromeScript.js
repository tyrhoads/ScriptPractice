const userInput = document.getElementById('text-input');
const checkButton = document.getElementById('check-btn');
const result = document.getElementById('result');



function getText(input)
{
    const inputContainer = input.value;
    console.log(inputContainer);
    userInput.value="";
    result.replaceChildren();
    
}



getText(userInput.value);


checkButton.addEventListener("click", () =>{
    getText(userInput); 
});

// Execute a function when the user presses a key on the keyboard in the input field
userInput.addEventListener("keypress", function(event) {
  // If the user presses the "Enter" key
  if (event.key === "Enter") {
    getText(userInput); 
  }
});
