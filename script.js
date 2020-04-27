document.querySelector("#calculator").innerHTML = buildCalcContainer();
document.querySelector("#calculator").innerHTML += buildCalcButtons();

document.querySelector("#calculator").addEventListener("click", function(){
    buildEventListeners();
    buildFunctionSign();
})


document.querySelector("#calculator").addEventListener("click", function(){
    compute();
})