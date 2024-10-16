const userInput = document.getElementById('text-input');
const checkButton = document.getElementById('check-btn');
const result = document.getElementById('result');



function getText(input)
{
   
    const inputContainer = input;
    if (input === '') {
        alert('Please input a value');
        return;
      }
    // Remove the previous result
  result.replaceChildren();

  const lowerCaseStr = input.replace(/[^A-Za-z0-9]/gi, '').toLowerCase();
  let resultMsg = `<strong>${inputContainer}</strong> ${
    lowerCaseStr === [...lowerCaseStr].reverse().join('') ? 'is' : 'is not'
  } a palindrome.`;

  const pTag = document.createElement('p');
  pTag.className = 'text-input';
  pTag.innerHTML = resultMsg;
  result.appendChild(pTag);

  // Show the result.
  result.classList.remove('hidden');
}





checkButton.addEventListener("click", () =>{
    getText(userInput.value); 
    userInput.value="";
});

// Execute a function when the user presses a key on the keyboard in the input field
userInput.addEventListener("keypress", function(event) {
  // If the user presses the "Enter" key
  if (event.key === "Enter") {
    getText(userInput.value);
    userInput.value="";
  }
});
