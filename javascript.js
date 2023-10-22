let btn = document.querySelectorAll(".content>span");
let input = document.getElementById('input');

input.innerText = 0;

let output = "0";

btn.forEach(x => x.addEventListener('click', clicked));

function clicked(event) {

    let x = event.target.innerText;
    if (x === "=") {
        let result;
        try {
            result = String(eval(output));
        } catch {
            input.innerHTML = "Invalid Input";
        }
        output = result.slice(-1) == "=" ? result.slice(0, result.length - 1) : result;
    } else if (x === "C") {

        output = "0";

    } else if (x === "AC") {

        output = String(output).slice(0, -1);

        if (output.length == 0) output = "0";

    } else {
        if (output === "0")  output = "";


        output += x;
    }
    input.innerText = output;
    if (output.length >= 13) input.innerHTML = "Max Length"
    
}



let light = document.getElementById("light");
let dark = document.getElementById("dark");
dark.style.visibility = "hidden";

light.addEventListener("click",function(){
    document.getElementById("darkmode-container").classList.toggle("container-background-color");
    document.getElementById("darkmode-calculator").classList.toggle("darkmode-calculator-color");
    document.getElementById("darkmode-content").classList.toggle("darkmode-content-color");
    document.querySelector("#darkmode-content").classList.toggle("darkmode-number-color");

    light.style.visibility = "hidden";
    dark.style.visibility = "visible";
    
});

dark.addEventListener("click",function(){
    document.getElementById("darkmode-container").classList.remove("container-background-color");
    document.getElementById("darkmode-calculator").classList.remove("darkmode-calculator-color");
    document.getElementById("darkmode-content").classList.remove("darkmode-content-color");
    document.querySelector("#darkmode-content").classList.remove("darkmode-number-color");

    dark.style.visibility = "hidden";
    light.style.visibility = "visible";
});

