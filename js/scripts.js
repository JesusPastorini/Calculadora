const previousOperationText = document.querySelector("#previous-operation");
const currentOperationText = document.querySelector("#current-operation");
const buttons = document.querySelectorAll("#buttons-container button");

class Calculator {
    constructor(previousOperationText, currentOperationText) {
        this.previousOperationText = previousOperationText;
        this.currentOperationText = currentOperationText;
        this.clear();
    }

    clear() {
        this.currentOperation = "";
        this.previousOperation = "";
        this.operation = undefined;
    }

    delete() {
        this.currentOperation = this.currentOperation.toString().slice(0, -1);
    }

    appendNumber(number) {
        if (number === "." && this.currentOperation.includes(".")) return;
        this.currentOperation = this.currentOperation.toString() + number.toString();
    }

    chooseOperation(operation) {
        if (this.currentOperation === "") return;
        if (this.previousOperation !== "") {
            this.compute();
        }
        this.operation = operation;
        this.previousOperation = this.currentOperation;
        this.currentOperation = "";
    }

    compute() {
        let computation;
        const prev = parseFloat(this.previousOperation);
        const current = parseFloat(this.currentOperation);
        if (isNaN(prev) || isNaN(current)) return;
        switch (this.operation) {
            case "+":
                computation = prev + current;
                break;
            case "-":
                computation = prev - current;
                break;
            case "*":
                computation = prev * current;
                break;
            case "/":
                computation = prev / current;
                break;
            default:
                return;
        }
        this.currentOperation = computation;
        this.operation = undefined;
        this.previousOperation = "";
    }

    updateScreen() {
        this.currentOperationText.innerText = this.currentOperation;
        if (this.operation != null) {
            this.previousOperationText.innerText = `${this.previousOperation} ${this.operation}`;
        } else {
            this.previousOperationText.innerText = "";
        }
    }
}

const calc = new Calculator(previousOperationText, currentOperationText);

buttons.forEach((btn) => {
    btn.addEventListener("click", (e) => {
        const value = e.target.innerText;
        if (value === "C") {
            calc.clear();
        } else if (value === "CE") {
            calc.currentOperation = "";
        } else if (value === "DEL") {
            calc.delete();
        } else if (value === "=") {
            calc.compute();
        } else if (["+", "-", "*", "/"].includes(value)) {
            calc.chooseOperation(value);
        } else {
            calc.appendNumber(value);
        }
        calc.updateScreen();
    });
});
