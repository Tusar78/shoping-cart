// Initialize this variable for iphone
const iphonePlus = document.getElementById('iphone-plus');
const iphoneMinus = document.getElementById('iphone-minus');

// Initialize this variable for casing
const casePlus = document.getElementById('case-plus');
const caseMinus = document.getElementById('case-minus');



// Increased and decreased case function
const amountUpdate = (product, setGetAttr, price, isIncreased) => {
    const productInput = document.getElementById(product+'-input');
    let productInputText = productInput.value;
    const productInputValue = parseFloat(productInputText);
    
    if (isIncreased) {         
        productInputText = productInputValue + 1;
        setGetAttr.removeAttribute('disabled')
    } else {
        if (productInputValue > 0) {
            productInputText = productInputValue - 1;
        } else {
            setGetAttr.setAttribute('disabled', true)
        }              
    }
    productInput.value = productInputText;

    // Get case total
    const productTotal = document.getElementById(product+'-total')
    productTotal.innerText = productInputText * price;

    // SubTotal Amount
    calculateAmount()

}

const getInputValue = (product) => {
    const productInput = document.getElementById(product+'-input');
    const productNumber = parseInt(productInput.value);
    return productNumber;
}

const calculateAmount = () => {
    const iphoneTotal = getInputValue('iphone') * 1219;
    const caseTotal = getInputValue('case') * 59;
    const subTotalAmount = iphoneTotal + caseTotal;
    
    // added subtotal section
    const subTotal = document.getElementById('sub-total');
    subTotal.innerText = subTotalAmount;

    // Generate Tax
    const tax = document.getElementById('tax-amount');
    const taxAmount = subTotalAmount / 12;
    tax.innerText = taxAmount.toFixed(2);

    // Total
    const total = document.getElementById('total-price');
    total.innerText = subTotalAmount + parseFloat(taxAmount.toFixed(2));
}
 
// increased functionalities for iphone 
iphonePlus.addEventListener('click', e => {
    amountUpdate('iphone', iphoneMinus, 1219, true);
})

// Decreased functionalities for iphone
iphoneMinus.addEventListener('click', e => {
    amountUpdate('iphone', iphoneMinus, 1219, false);
})

// increased functionalities for casing 
casePlus.addEventListener('click', e => {
    amountUpdate('case', caseMinus, 59, true);
})

// Decreased functionalities for casing
caseMinus.addEventListener('click', e => {
    amountUpdate('case', caseMinus, 59, false);
})