//Calculator Functions

//Add
function addition() {
    const num1Input = document.getElementById("num1").value;
    const num1 = Number(num1Input);

    const num2Input = document.getElementById("num2").value;
    const num2 = Number(num2Input);

    const result = num1 + num2;
    if (result < 0){
        document.getElementById("output").style.color = "red";
    } else {
        document.getElementById("output").style.color = "black";
    }

    document.getElementById("output").innerHTML = String(result);
    
}

//Subtract
function subtraction() {
    const num1Input = document.getElementById("num1").value;
    const num1 = Number(num1Input);

    const num2Input = document.getElementById("num2").value;
    const num2 = Number(num2Input);

    const result = num1 - num2;
    if (result < 0){
        document.getElementById("output").style.color = "red";
    } else {
        document.getElementById("output").style.color = "black";
    }

    document.getElementById("output").innerHTML = String(result);
}

//Multiply
function multiply(){
    const num1Input = document.getElementById("num1").value;
    const num1 = Number(num1Input);

    const num2Input = document.getElementById("num2").value;
    const num2 = Number(num2Input);

    const result = num1 * num2;
    if (result < 0){
        document.getElementById("output").style.color = "red";
    } else {
        document.getElementById("output").style.color = "black";
    }

    document.getElementById("output").innerHTML = String(result);

}

//Divide
function divide(){
    const num1Input = document.getElementById("num1").value;
    const num1 = Number(num1Input);

    const num2Input = document.getElementById("num2").value;
    const num2 = Number(num2Input);

    const result = num1 / num2;
    if (result < 0){
        document.getElementById("output").style.color = "red";
    } else {
        document.getElementById("output").style.color = "black";
    }

    document.getElementById("output").innerHTML = String(result);
}

//Power
function power(){
    const num1Input = document.getElementById("num1").value;
    const num1 = Number(num1Input);

    const num2Input = document.getElementById("num2").value;
    const num2 = Number(num2Input);

    let currentNum = 1;
    //if input number 2 is negative, make num1 its reciprocal
    if (num2 < 0){
        const pos2 = num2 * -1;
        for (let i = 0; i < pos2; i++){
            currentNum = currentNum * (1/num1);
        }
    // else if input number 2 is not negative
    } else {
        for (let i = 0; i < num2; i++){
            currentNum = currentNum * num1;
        }
    }
    document.getElementById("output").innerHTML = String(currentNum);

}

//Clear
function clearAll(){
    document.getElementById("output").innerHTML = "";
    document.getElementById("num1").value = "";
    document.getElementById("num2").value = "";

}