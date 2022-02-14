// Declared and initialized two buttons
const increaseBtn = document.getElementById('increase-btn');
const decreasedBtn = document.getElementById('decreased-btn');

// Increased and decreased case function
const caseUpdate = isIncreased => {
    const caseInput = document.getElementById('case-input');
    let caseInputText = caseInput.value;
    const caseInputValue = parseFloat(caseInputText);
    
    if (isIncreased) {             
        // Case increased
        caseInputText = caseInputValue + 1;
        // Remove attribute
        decreasedBtn.removeAttribute('disabled')
    } else {
        if (caseInputValue > 0) {
            caseInputText = caseInputValue - 1;
        } else {
            decreasedBtn.setAttribute('disabled', true)
        }              
    }
    caseInput.value = caseInputText;

    // Get case total
    const caseTotal = document.getElementById('case-total')
    // Amount increased
    caseTotal.innerText = caseInputText * 59;
}
 
// increased functionalities
increaseBtn.addEventListener('click', e => {
    caseUpdate(true);
})

// Decreased functionalities
decreasedBtn.addEventListener('click', e => {
    caseUpdate(false);
})