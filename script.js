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