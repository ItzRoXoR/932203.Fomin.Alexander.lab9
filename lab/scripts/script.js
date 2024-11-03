const buttons = document.querySelectorAll(".button");
const output = document.getElementById("output");
let outputContent = "0";

function draw(event) {
    const value = event.target.textContent;
    const lastSymbol = outputContent[outputContent.length - 1];

    switch(value) {
        case "*":
        case "/":
        case "+":
        case "-":
            if (outputContent === "0") {
                if (! (value === "-")) {
                    break;
                }
            }
            else if (lastSymbol === "*" || lastSymbol === "/" || lastSymbol === "-" || lastSymbol === "+" || lastSymbol === ".") {
                outputContent = outputContent.slice(0, -1);
            }

            outputContent += value;
            break;
        
        case ".":
            if ( !(lastSymbol === "*" || lastSymbol === "/" || lastSymbol === "-" || lastSymbol === "+" || lastSymbol === ".")) {
                outputContent += value;
            }
            break;

        case "=":
            if (lastSymbol === "*" || lastSymbol === "/" || lastSymbol === "-" || lastSymbol === "+" || lastSymbol === ".") {
                outputContent = outputContent.slice(0, -1); 
            }
            outputContent = eval(outputContent);
            break;
        
        case "<-":
            if (outputContent.length === 1) {
                outputContent = "0";
            }
            else {
                outputContent = outputContent.slice(0, -1);
            }
            break;

        case "C":
            outputContent = "0";
            break;

        default:
            if (outputContent === "0") {
                outputContent = "";
            }
            else if (outputContent.length > 15) {
                break;
            }
            outputContent += value;
    }
    output.innerHTML = outputContent;
}

for (i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click" , (event) => draw(event));
}

