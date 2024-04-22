const sum = (a,b) => a+b;
const sub = (a,b) => a-b;
const mul = (a,b) => a*b;
const divi = (a,b) => a/b;

function operate(a,operation,b){
    switch (operation) {
        case '+':
            return sum(a,b);
            break;
        case '-':
            return sub(a,b);
            break;
        case '*':
            return mul(a,b);
            break; 
        case '/':
            return divi(a,b);
            break;                   
    
        default:
            break;
    }
}

let op1 = 0;
let op2 = 0;

const digits = document.querySelectorAll(".num");
const display = document.querySelector(".display");

digits.forEach((button)=>
    {button.addEventListener("click",()=>
        displayDigit(button))
    });

function displayDigit(button){
    display.textContent += button.textContent;
    op1 = Number (display.textContent);
}
