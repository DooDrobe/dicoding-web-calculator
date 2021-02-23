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
    calculator.displayNumber += digit;
 }

const buttons = document.querySelectorAll(".button");
for (let button of buttons) {
   button.addEventListener('click', function(event) {
 
       // mendapatkan objek elemen yang diklik
       const target = event.target;
 
       inputDigit(target.innerText);
       updateDisplay()
   });
}