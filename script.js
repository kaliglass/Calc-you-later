const sum = (a,b) => a+b;
const sub = (a,b) => a-b;
const mul = (a,b) => a*b;
const divi = (a,b) => a/b;

function round(value, precision) {
    var multiplier = Math.pow(10, precision || 0);
    return Math.round(value * multiplier) / multiplier;
}

function operate(a,operation,b){
    switch (operation) {
        case '+':
            return round(sum(a,b),2);
            break;
        case '-':
            return round(sub(a,b),2);
            break;
        case '*':
            return round(mul(a,b),2);
            break; 
        case '/':
            if(b == 0) return alert("Dividing by zero is not good for health");
            return round(divi(a,b),2);
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
const equal = document.querySelector(".equal");
const percent = document.querySelector(".percent");
const deci = document.querySelector(".deci");
percent.addEventListener("click",()=>{
    op1 = Number(display.textContent);
    display.textContent = operate(op1,"/",100);
})


let op1 = 0;
let currentOperation = "";
let op2 = 0;


operation.forEach(button => {
    button.addEventListener("click",()=>{
    if(currentOperation === ""){
    currentOperation = button.textContent;
    op1 = Number(display.textContent);
    display.textContent = "";
    display.textContent.includes(".")?deci.disabled = true:deci.disabled = false;
}
    else{
        op2 = Number(display.textContent);
        display.textContent = operate(op1,currentOperation,op2);
        currentOperation = button.textContent;
        op1 = Number(display.textContent);
        display.textContent.includes(".")?deci.disabled = true:deci.disabled = false;
    }
})
});

equal.addEventListener("click",()=>{
    op2 = Number(display.textContent);
    display.textContent = operate(op1,currentOperation,op2);
    currentOperation = "";
    display.textContent.includes(".")?deci.disabled = true:deci.disabled = false;
})

cancel.addEventListener("click",()=>{
    display.textContent = "";
    op1 = undefined;
    op2 = undefined;
    currentOperation = "";
    deci.disabled = false;
});

del.addEventListener("click",()=>{
    display.textContent= display.textContent.replace(/.$/, '')
    display.textContent.includes(".")?deci.disabled = true:deci.disabled = false;
});


digits.forEach(button => {
    button.addEventListener("click",() => {
        if(button.textContent == '.'){
            deci.disabled = true;
        }
        if(Number(display.textContent) == op1){
            display.textContent = button.textContent;
            display.textcontent += button.textContent;
        }
        else{
        display.textContent += button.textContent;
        }
       
    })
})




