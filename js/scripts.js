const previousOperationText = document.querySelector("#previous-operation")
const currentOperationText = document.querySelector("#current-operation")
const buttons = document.querySelectorAll("#buttons-container button")
 
class Calculator {
    constructor(previousOperationText, currentOperationText) {
        this.previousOperationText = previousOperationText;
        this.currentOperationText = currentOperationText;
        this.currentOperation = ""
    }
//manda os digitos para o visor    
addDigit(digit){
    this.currentOperation = digit
    this.updateScreen()
}
//altera os valores da tela
updateScreen(){
    this.currentOperationText.innerText += this.currentOperation;
}
}
const calc = new Calculator(previousOperationText, currentOperationText);
//value recebe os valores texto do htmls
buttons.forEach((btn) => {
    btn.addEventListener("click", (e) => {
        const value = e.target.innerText;
        //convertendo valor recebido string para numero +value
        if(+value >= 0 || value === "."){
            calc.addDigit(value);
        }else{

        }
    })
})