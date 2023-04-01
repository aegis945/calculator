const previousOperandText = document.querySelector("[data-previous-operand]");
const currentOperandText = document.querySelector("[data-current-operand]");
const numberButtons = document.querySelectorAll("[data-number]");
const operationButtons = document.querySelectorAll("[data-operator]");
const allClearButton = document.querySelector("[data-all-clear]");
const deleteButton = document.querySelector("[data-delete]");
const equalsButton = document.querySelector("[data-equals]");

/* Event listeners for div clicks */
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
   calculator.calculate();
   calculator.updateDisplay();
})

/* Event listeners for keyboard input */
document.addEventListener("keydown", (number) => {
    if(/^\d$|\./.test(number.key)) {
       calculator.appendNumber(number.key); 
       calculator.updateDisplay();
    }
});

 document.addEventListener("keydown", (operation) => {
    switch (operation.key) {
      case "+":
      case "-":
        calculator.chooseOperation(operation.key);
        calculator.updateDisplay();
        break;
      case "/":
        calculator.chooseOperation("÷");
        calculator.updateDisplay();
        break;
      case "x":
      case "X":
      case "*":
        calculator.chooseOperation("x");
        calculator.updateDisplay();
        break;
      default:
        return;
    }
  });  

  document.addEventListener("keydown", (button) => {
    if(button.key === "Delete" || button.key === "Backspace") {
        calculator.delete();
        calculator.updateDisplay();
    }
    if(button.key === "Enter" || button.key === "=") {
        calculator.calculate();
        calculator.updateDisplay();
    }
    if(button.key === 27 || button.key === "Escape") {
        calculator.allClear();
        calculator.updateDisplay();
    }
  })

class Calculator { 
    constructor(previousOperandText, currentOperandText) {
        this.previousOperandText = previousOperandText;
        this.currentOperandText = currentOperandText;
        this.allClear();
        this.updateDisplay();
    }

    appendNumber(number) {
        if(number === "." && this.currentOperand.includes(".")) return;
        if(this.currentOperand.length === 22)  return; 
        if(this.currentOperand === "0" && number !== ".") {
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
        if(this.currentOperand === "") return;
        if(this.previousOperand !== "") {
            this.calculate();
        }
        this.operation = operation;
        this.previousOperand = this.currentOperand + " " + this.operation;
        this.currentOperand = "";
    }

    calculate() {
        let calculationResult;
        let previous = parseFloat(this.previousOperand);
        let current = parseFloat(this.currentOperand);
        if(isNaN(previous) || isNaN(current)) return;

        switch(this.operation) {
            case "÷":
                calculationResult = previous / current;
                break;
            case "x":
                calculationResult = previous * current;
                break;
            case "+":
                calculationResult = previous + current;
                break;
            case "-":
                calculationResult = previous - current;
                break;  
            default:
                return;          
        }
        this.currentOperand = calculationResult;
        this.previousOperand = "";
    }
}

const calculator = new Calculator(previousOperandText, currentOperandText);