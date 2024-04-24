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



const digits = document.querySelectorAll(".num");
const display = document.querySelector(".display");
const cancel = document.querySelector(".cancel");
const del  = document.querySelector(".del");
const operation  = document.querySelectorAll(".operation");

let ope;
operation.forEach(button => {
    button.addEventListener("click",()=>{
    let ope = button.textContent;
})
});



cancel.addEventListener("click",()=>{
    display.textContent = ""
});

del.addEventListener("click",()=>{
    display.textContent= display.textContent.replace(/.$/, '')
});


digits.forEach(button => {
    button.addEventListener("click",() => {
        display.textContent += button.textContent;
    })
})


// console.log(op1);