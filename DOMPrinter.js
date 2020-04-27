
function buildCalcButtons (){
    let buttonName = `<div class="container" id = "calc-buttons">
    <div class = "row">
        <button class = "btn btn-primary btn-lg center" id = "equals"> = </button>
    </div>
    <div class="row">`;
    for (let i = 7; i < 10; i++){
        buttonName += `<button type = "reset" class= "btn btn-primary" id = "calc-btn-${i}" value = "${i}"> ${i} </button>`
    }
    buttonName += `<button type = "reset" class= "btn btn-primary vl" id = "division"> / </button>
    </div> 
    <div class = "row">`
    for (let i = 4; i < 7; i++){
        buttonName += `<button type = "reset" class= "btn btn-primary" id = "calc-btn-${i}" value = "${i}"> ${i} </button>`
    }
    buttonName += ` <button type = "reset" class= "btn btn-primary" id = "multiplication"> * </button> </div> 
    <div class = "row">`
    for (let i = 1; i < 4; i++){
        buttonName += ` <button type = "reset" class= "btn btn-primary" id = "calc-btn-${i}" value = "${i}"> ${i} </button>`
    }
    buttonName += `<button type = "reset" class= "btn btn-primary vl" id = "subtraction"> - </button> </div> 
    <div class = "row">
    <button type = "reset" class= "btn btn-primary" id = "calc-btn-0" value = "0"> 0 </button>
    <input class="btn btn-primary" id = "clear" type="reset" value="Reset">
    <button type = "reset" class= "btn btn-primary vl" id = "addition"> + </button>
    `
    return buttonName;
}

function buildCalcContainer () {
    return`
    <textarea readonly id = "answer"></textarea>
    `
}

function buildEventListeners () {

    for (let i = 0; i < 10; i++){
        if(event.target.id === `calc-btn-${i}`){
            const intValue = parseInt(document.querySelector(`#calc-btn-${i}`).value)
            console.log(intValue)
            document.querySelector("#answer").innerHTML += intValue;
        }
    }
}


function buildFunctionSign (){

    if(event.target.id === "addition"){
        document.querySelector("#answer").innerHTML += "+";
    }
    else if(event.target.id === "subtraction"){
        document.querySelector("#answer").innerHTML += "-";
    }
    else if(event.target.id === "multiplication"){
        document.querySelector("#answer").innerHTML += "*";
    }
    else if(event.target.id === "division"){
        document.querySelector("#answer").innerHTML += "/";
    }
    else if(event.target.id === "clear"){
        document.querySelector("#calculator").innerHTML = buildCalcContainer();
        document.querySelector("#calculator").innerHTML += buildCalcButtons();
    }
}

function compute (){
    if(event.target.id === "equals"){
        const answerHTMLString = document.querySelector("#answer").innerHTML
        console.log(answerHTMLString)
        if (answerHTMLString.includes("+")){
            const answerArray = answerHTMLString.split("+")
            let sum = 0;
            for (let i = 0; i < answerArray.length; i++){
                sum += parseInt(answerArray[i])
            }
            document.querySelector("#answer").innerHTML += ` = ${sum}`;
        }
        else if (answerHTMLString.includes("-")){
            const answerArray = answerHTMLString.split("-")
            const xValue = parseInt(answerArray[0])
            const yValue = parseInt(answerArray[1])
            const difference = subtract(xValue, yValue)
            document.querySelector("#answer").innerHTML += ` = ${difference}`;
        }
        else if (answerHTMLString.includes("*")){
            const answerArray = answerHTMLString.split("*")
            const xValue = parseInt(answerArray[0])
            const yValue = parseInt(answerArray[1])
            const product = multiply(xValue, yValue)
            document.querySelector("#answer").innerHTML += ` = ${product}`;
        }
        else if (answerHTMLString.includes("/")){
            const answerArray = answerHTMLString.split("/")
            const xValue = parseInt(answerArray[0])
            const yValue = parseInt(answerArray[1])
            const quotient =  divide(xValue, yValue)
            document.querySelector("#answer").innerHTML += ` = ${quotient}`;
        }
    }

}

function divide (x, y){
    const quotient = x / y;
    return quotient;
}

function multiply (x, y){
    const product = x * y;
    return product;
}

function subtract (x, y){
    const diff = x - y;
    return diff;
}

function add (x, y){
    const sum = x + y;
    return sum;
}