const previousOperationText = document.querySelector("#previous-operation")
const currentOperationText = document.querySelector("#current-operation")
const buttons = document.querySelectorAll("#buttons-container button")
 
class Calculator {
    

}
//value recebe os valores texto do htmls
buttons.forEach((btn) => {
    btn.addEventListener("click", (e) => {
        const value = e.target.innerText;
        //convertendo valor recebido string para numero +value
        if(+value >= 0 || value === "."){

        }else{

        }
    })
})