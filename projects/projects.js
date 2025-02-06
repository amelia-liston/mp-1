//Calculator Functions

//Add
function addition() {
    const num1Input = document.getElementById("num1").value;
    const num1 = Number(num1Input);

    const num2Input = document.getElementById("num2").value;
    const num2 = Number(num2Input);

    const result = num1 + num2;

    document.getElementById("output").innerHTML = String(result);
    
}

//Subtract
function subtraction() {
    const num1Input = document.getElementById("num1").value;
    const num1 = Number(num1Input);

    const num2Input = document.getElementById("num2").value;
    const num2 = Number(num2Input);

    const result = num1 - num2;

    document.getElementById("output").innerHTML = String(result);
}

//Multiply
function multiply(){
    const num1Input = document.getElementById("num1").value;
    const num1 = Number(num1Input);

    const num2Input = document.getElementById("num2").value;
    const num2 = Number(num2Input);

    const result = num1 * num2;

    document.getElementById("output").innerHTML = String(result);

}

//Divide
function divide(){
    const num1Input = document.getElementById("num1").value;
    const num1 = Number(num1Input);

    const num2Input = document.getElementById("num2").value;
    const num2 = Number(num2Input);

    const result = num1 / num2;

    document.getElementById("output").innerHTML = String(result);
}

//Power
function power(){

}

//Clear
function clearAll(){
    document.getElementById("output").innerHTML = "";
}