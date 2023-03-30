const previousOperandText = document.querySelector("[data-previous-operand]");
const currentOperandText = document.querySelector("[data-current-operand]");
const numberButtons = document.querySelectorAll("[data-number]");
const operationButtons = document.querySelectorAll("[data-operator]");
const allClearButton = document.querySelector("[data-all-clear]");
const deleteButton = document.querySelector("[data-delete]");
const equalsButton = document.querySelector("[data-equals]");


numberButtons.forEach(button => {
    button.addEventListener("click", () => {
        calculator.appendNumber(button.innerText);
        calculator.updateDisplay();
    })
})

operationButtons.forEach(button => {
    button.addEventListener("click", () => {
        console.log(button.innerText);
    })
})

allClearButton.addEventListener("click", () => {
    calculator.allClear();
    calculator.updateDisplay();
})

deleteButton.addEventListener("click", () => {

})

equalsButton.addEventListener("click", () => {
   
})

class Calculator {
    constructor(previousOperandText, currentOperandText) {
        this.previousOperandText = previousOperandText;
        this.currentOperandText = currentOperandText;
        this.allClear();
    }

    appendNumber(number) {
        if(this.currentOperand === 0){
            this.currentOperand = number.toString();
        } else {
            this.currentOperand = this.currentOperand.toString() + number.toString();
    }
}

    updateDisplay() {
        this.currentOperandText.innerText = this.currentOperand;
        this.previousOperandText.innerText = this.previousOperand;
    }

    allClear(){
        this.currentOperand = 0;
        this.previousOperand = "";
    }
}

const calculator = new Calculator(previousOperandText, currentOperandText);