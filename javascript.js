let array = document.querySelectorAll(".data>div");
let input = document.getElementById('input');

let output = '0';

input.innerHTML = output;
array.forEach(x => x.addEventListener('click', clicked));

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

        if (output === "undefined") output = "";

        input.innerHTML = output;

    } else if (x === "C") {

        output = '';

    } else if (x === "AC") {

        output = String(output).slice(0, -1);

    } else {
        if (output === "0") {
            output = "";
        }

        output += x;
    }
    input.innerHTML = output;
    if(output.length >=13){
        input.innerHTML = "Max Length"
    }

    
}




