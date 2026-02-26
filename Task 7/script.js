// Implement a standard calculator having addition, subtraction, multiplication and division 
// functionalities only. The script should call an external scripting file, prompt user for the first 
// operand, followed by any operator and second operand. Based on the operator provided by the 
// user, the system should call the corresponding function and alert the desired result. Do not use 
// the conditional if-else statement.


function add(a,b){
    return a+b;
}

function subtract(a,b){
    return a-b;

}

function multiply(a,b){
    return a*b;
}

function divide(a,b){
    if(b==0)
    {
        alert("Division by zero is not allowed.")
    }
    return a/b;

}

function calculator(){
    var a=Number(prompt("Enter the first NUmber: "));
    var operator=prompt("Enter the operator: ");
    var b=Number(prompt("Enter the second NUmber: "));
    var result;
    if(operator=="+"){
        result=add(a,b);
    }
    else if(operator=="-"){
       result= subtract(a,b);
    }
    else if(operator=="*"){
        result=multiply(a,b);
    }
    else if (operator=="/"){
        divide(a,b)
    }
    else{
        alert("Invalide oeprator Entered!")
    }

    alert("The result is: "+ result);


}

calculator();
