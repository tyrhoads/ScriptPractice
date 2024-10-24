const userInput = document.getElementById('text-input');
const checkButton = document.getElementById('check-btn');
const result = document.getElementById('result');
const people =[];
const peopleShuffled = [];
const sButton = document.getElementById('sButton');
function getText(input)
{
   
    const inputContainer = input;
    if (input === '') {
        alert('Please input a value');
        return;
      }
    // Remove the previous result
  //result.replaceChildren();
     
  const lowerCaseStr = input.replace(/[^A-Za-z0-9]/gi, '').toUpperCase();
  let resultMsg = `${lowerCaseStr}`;
  people.push(lowerCaseStr); 
  peopleShuffled.push(lowerCaseStr);
  const pTag = document.createElement('h3');
  pTag.className = 'text-input';
  pTag.innerHTML = resultMsg;
  result.appendChild(pTag);
  

  


  // Show the result.
  result.classList.remove('hidden');
  sButton.classList.remove('hidden');
};

function shuffle(array)
{
    let currentIndex = array.length;
      
    // While there remain elements to shuffle...
     while (currentIndex != 0) {
      
    // Pick a remaining element...
    let randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;
      
    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
    array[randomIndex], array[currentIndex]];
    }
};

function santa (array, shuffledArray){
    
    result.replaceChildren();
    shuffle(shuffledArray);
    for(let i =0; i < array.length; i++){
        const fTag = document.createElement('p');
        fTag.className = 'shuffle-input';
        fTag.innerHTML = `${array[i]}  got  ${shuffledArray[i]}  `;
        result.appendChild(fTag);
    }
    
   
    
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

sButton.addEventListener("click", () =>{
    
   
    santa(people,peopleShuffled );
    
});