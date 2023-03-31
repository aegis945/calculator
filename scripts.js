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
        calculator.chooseOperation(button.innerText);

        calculator.updateDisplay(); 
    })
})

allClearButton.addEventListener("click", () => {
    calculator.allClear();
    calculator.updateDisplay();
})

deleteButton.addEventListener("click", () => {
    calculator.delete();
    calculator.updateDisplay();
})

equalsButton.addEventListener("click", () => {
   
})

class Calculator { 
    constructor(previousOperandText, currentOperandText) {
        this.previousOperandText = previousOperandText;
        this.currentOperandText = currentOperandText;
        this.allClear();
        this.updateDisplay();
    }

    appendNumber(number) {
        if (number === "," && this.currentOperand.includes(",")) return;
        if (this.currentOperand === "0" && number !== ",") {
          this.currentOperand = number.toString();
        } else {
          this.currentOperand = this.currentOperand.toString() + number.toString();
        }  
    }
      
    updateDisplay() {
        this.currentOperandText.innerText = this.currentOperand;
        this.previousOperandText.innerText = this.previousOperand;
        if(this.currentOperand === "" && this.previousOperand === "") {
            this.currentOperand = "0";
        }
    }

    allClear() {
        this.currentOperand = "0";
        this.previousOperand = "";
    }

    delete() {
        if(this.currentOperand !== "0") {
            this.currentOperand = this.currentOperand.toString().slice(0, -1);
        }
    }

    chooseOperation(operation) {
        if(this.currentOperand === "") return
        this.operation = operation;
        this.previousOperand = this.currentOperand + " " + this.operation;
        this.currentOperand = "";
    }
}

const calculator = new Calculator(previousOperandText, currentOperandText);