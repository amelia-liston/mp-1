//Calculator Functions

//Add
function addition() {
    const num1Input = document.getElementById("num1").value;
    const num1 = Number(num1Input);

    const num2Input = document.getElementById("num2").value;
    const num2 = Number(num2Input);

    const result = num1 + num2;

    document.getElementById("output").innerHTML = String(result);
    //document.getElementById("output").style.visibility = "visible";
    
}

//Subtract
function subtraction() {

}

//Multiply
function multiply(){

}

//Divide
function divide(){

}

//Power
function power(){

}

//Clear
function clear(){
    //document.getElementById("output").style.visibility = "hidden";
    document.getElementById("output").innerHTML = "";
}