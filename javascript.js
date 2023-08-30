let array = document.querySelectorAll(".data>div");
let input = document.getElementById('input');

let output = '';


array.forEach(x => x.addEventListener('click', clicked));

function clicked(event) {

    let x = event.target.innerText;
    console.log(output.length);

    if (x === "=" && output.length <= 10) {
        output = eval(output);
    } else if (x === "C") {
        output = '';
    } else if (x === "AC") {
        output = String(output).slice(0, -1);
    } else {
        output += x;
    }

    if (output.length > 10 || x.length > 10) {
        document.querySelector('p').classList.add("result");
        input.innerHTML = "Max Length";

    } else {
        input.innerHTML = output;
        document.querySelector('p').classList.remove("result");
    }









}


