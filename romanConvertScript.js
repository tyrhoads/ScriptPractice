
const convertButton = document.getElementById('convert-btn');
const output = document.getElementById('output');

const convertToRoman = num => {
    const ref = [
      ['M', 1000],
      ['CM', 900],
      ['D', 500],
      ['CD', 400],
      ['C', 100],
      ['XC', 90],
      ['L', 50],
      ['XL', 40],
      ['X', 10],
      ['IX', 9],
      ['V', 5],
      ['IV', 4],
      ['I', 1]
    ];
    const res = [];
  
    ref.forEach(function (arr) {
      while (num >= arr[1]) {
        res.push(arr[0]);
        num -= arr[1];
      }
    });

}

const isValid = (num) => {
    if (num <1) {
        output.innerText = ("Please enter a number greater than or equal to 1")
        return false;
    }
    else if( num >3999){
        output.innerText = ("Please enter a number less than or equal to 3999")
        return false;
    }
    else{
        return true;
    }
}

convertButton.addEventListener("click", () =>{
    const number = document.getElementById('number').value;
    const int = parseInt(number,10)
    output.removeAttribute("hidden")
    if (isValid(int)){
        output.innerText = int;
        
    }
    
    
});