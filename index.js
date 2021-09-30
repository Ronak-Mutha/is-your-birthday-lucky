const dateOfBirth = document.querySelector('#date-of-birth');
const luckyNumber = document.querySelector('#lucky-number');
const checkNumberBtn = document.querySelector('#check-number-btn');
const displayMessage = document.querySelector('#message');

const calculateSum = (dob) => {
    let sum = 0;
    dob = dob.replaceAll("-", "");
    console.log(dob);
    for (let digit of dob) {
        sum = sum + Number(digit);
      }
    return sum;
};

const checkIsNumberLucky = (sum, number) => {
    console.log(sum, number);
    if( sum % number == 0) {
        return showMessage(`${number} is a lucky number!! 🥳 🥳 🥳 `);
    }
    showMessage(`${number} is not that lucky 😕`);
};

const showMessage = (message) => {
    displayMessage.innerText = message;
};

checkNumberBtn.addEventListener('click',() => {
    const dob = dateOfBirth.value;const number = Number(luckyNumber.value);
    if(dob && number > 0) {
        const sum = calculateSum(dob);
        checkIsNumberLucky(sum, number);
    } else {
        showMessage("Please enter both the fields and number should be greater than 0!!");
    }
});

