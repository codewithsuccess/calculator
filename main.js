const input = document.querySelector("input");
const Button = document.querySelectorAll("button");
let result = ""; // storing result here

// for work of addeventlisteners will work only in arrays
Button.forEach(Buttons => {
    Buttons.addEventListener("click", (e) => {
        // result will stored which button is clicked
        // buton is "=" then evaluate
        if (e.target.innerHTML == '=') {
            result = eval(result); // eval() : js inbuilt function to calculate
            input.value = result; // updating result
        } else if (e.target.innerHTML == 'AC') {
            result = ""; // clear all 
            input.value = result; // updating result

        } else if(e.target.innerHTML == 'DEL') {
            result = result.substring(0, result.length-1); // it will remove string from last element one by one
            input.value = result; //updating result
        } else {
            result += e.target.innerHTML; // storing clicked button value
            input.value = result; // updating result
        }
    });
});