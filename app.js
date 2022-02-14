// Declared and initialized two buttons
const increaseBtn = document.getElementById('increase-btn');
const decreasedBtn = document.getElementById('decreased-btn');

// Increased and decreased case function
const caseUpdate = isIncreased => {
    const caseTotal = document.getElementById('case-total')
    const caseTotalText = caseTotal.innerText;
    const caseTotalValue = parseFloat(caseTotalText)

    const caseInput = document.getElementById('case-input');
    const caseInputText = caseInput.value;
    const caseInputValue = parseFloat(caseInputText);
    
    if (isIncreased) {             
        // Case increased
        caseInput.value = caseInputValue + 1;
        // Amount increased
        caseTotal.innerText = caseTotalValue + 59;
        // Remove attribute
        decreasedBtn.removeAttribute('disabled')
    } else {
        if (caseInputValue > 0) {
            caseTotal.innerText = caseTotalValue - 59;  
            caseInput.value = caseInputValue - 1;
        } else {
            decreasedBtn.setAttribute('disabled', true)
        }
              
    }
}
 
// increased functionalities
increaseBtn.addEventListener('click', e => {
    caseUpdate(true);
})

// Decreased functionalities
decreasedBtn.addEventListener('click', e => {
    caseUpdate(false);
})