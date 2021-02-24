const calculator = {
    displayNumber: '0',
    operator: null,
    firstNumber: null, //kita gunakan nilai null terlebih dahulu karena properti tersebut akan diberikan nilai ketika pengguna melakukan aksi.
    waitingForSecondNumber: false //merupakan kondisi di mana kalkulator sedang menunggu pengguna menentukkan angka kedua dalam melakukan perhitungan.
};

//update data
function updateDisplay(){
    document.querySelector("#displayNumber").innerText = calculator.displayNumber;

}

//fungsi Clear calculator
function clearCalculator() {
    calculator.displayNumber = '0';
    calculator.operator = null;
    calculator.firstNumber = null;
    calculator.waitingForSecondNumber = false;
 }

 //fungsi untukmemasukkan inputan angka ke display
 function inputDigit(digit) {
    if(calculator.displayNumber === '0'){
        calculator.displayNumber = digit;
    }else{
        calculator.displayNumber += digit;
    }
 }

 function inverseNumber() {
    if (calculator.displayNumber === '0') {
        return;
    }
    calculator.displayNumber = calculator.displayNumber * -1;
 }

const buttons = document.querySelectorAll(".button");
for (let button of buttons) {
   button.addEventListener('click', function(event) {
 
       // mendapatkan objek elemen yang diklik
       const target = event.target;

       if(target.classList.contains('clear')) {
        clearCalculator();
        updateDisplay();
        return;
        }

        if(target.classList.contains('negative')) {
            inverseNumber();
            updateDisplay();
            return;
        }
  
        if(target.classList.contains('equals')) {
            performCalculation();
            updateDisplay();
            return;
        }
  
        if(target.classList.contains('operator')) {
            handleOperator(target.innerText);
            return;
        }

       inputDigit(target.innerText);
       updateDisplay()
   });
}

function handleOperator(operator) {
    if (!calculator.waitingForSecondNumber) {
        calculator.operator = operator;
        calculator.waitingForSecondNumber = true;
        calculator.firstNumber = calculator.displayNumber;
 
        // mengatur ulang nilai display number supaya tombol selanjutnya dimulai dari angka pertama lagi
        calculator.displayNumber = '0';
    } else {
        alert('Operator sudah ditetapkan')
    }
}

function performCalculation() {
    if (calculator.firstNumber == null || calculator.operator == null) {
        alert("Anda belum menetapkan operator");
        return;
    }
  
    let result = 0;
    if (calculator.operator === "+") {
        result = parseInt(calculator.firstNumber) + parseInt(calculator.displayNumber);
    } else {
        result = parseInt(calculator.firstNumber) - parseInt(calculator.displayNumber)
    }
  
    // objek yang akan dikirimkan sebagai argumen fungsi putHistory()
    const history = {
        firstNumber: calculator.firstNumber,
        secondNumber: calculator.displayNumber,
        operator: calculator.operator,
        result: result
    }
    putHistory(history);
    calculator.displayNumber = result;
    renderHistory();
 }
 


