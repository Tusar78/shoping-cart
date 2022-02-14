// Initialize this variable for iphone
const iphonePlus = document.getElementById('iphone-plus');
const iphoneMinus = document.getElementById('iphone-minus');

// Initialize this variable for casing
const casePlus = document.getElementById('case-plus');
const caseMinus = document.getElementById('case-minus');



// Increased and decreased case function
const amountUpdate = (userInput, userOutput, btn, multiply, isIncreased) => {
    const caseInput = document.getElementById(userInput);
    let caseInputText = caseInput.value;
    const caseInputValue = parseFloat(caseInputText);
    
    if (isIncreased) {         
        caseInputText = caseInputValue + 1;
        btn.removeAttribute('disabled')
    } else {
        if (caseInputValue > 0) {
            caseInputText = caseInputValue - 1;
        } else {
            btn.setAttribute('disabled', true)
        }              
    }
    caseInput.value = caseInputText;

    // Get case total
    const caseTotal = document.getElementById(userOutput)
    caseTotal.innerText = caseInputText * multiply;

    // Total Money
    // const subTotal = document.getElementById('sub-total');
    // let subTotalAmount = subTotal.innerText;
    // subTotalAmount = parseFloat(subTotalAmount) + parseFloat(caseTotal.innerText);
    // subTotal.innerText = subTotalAmount;

    // const tax = document.getElementById('tax');
    // let taxAmount = subTotal.innerText;

    // const total = document.getElementById('total');
    // let totalMoney = subTotal.innerText;
     
}
 
// increased functionalities for iphone 
iphonePlus.addEventListener('click', e => {
    amountUpdate('iphone-input', 'iphone-total', iphoneMinus, 1219, true);
})

// Decreased functionalities for iphone
iphoneMinus.addEventListener('click', e => {
    amountUpdate('iphone-input', 'iphone-total', iphoneMinus, 1219, false);
})

// increased functionalities for casing 
casePlus.addEventListener('click', e => {
    amountUpdate('case-input', 'case-total', caseMinus, 59, true);
})

// Decreased functionalities for casing
caseMinus.addEventListener('click', e => {
    amountUpdate('case-input', 'case-total', caseMinus, 59, false);

})