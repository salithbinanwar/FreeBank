// login button
const loginBtn = document.getElementById('login');

loginBtn.addEventListener('click', function () {
    const loginArea = document.getElementById('login-area');
    loginArea.style.display = 'none';

    const transactionArea = document.getElementById('transaction-area');
    transactionArea.style.display = 'block';
})
// deposit Button event
const depositBtn = document.getElementById('addDeposit');
depositBtn.addEventListener('click', function () {
    const depositNumber = getInputNumber('depositAmount')

    updateSpantext('currentDeposit', depositNumber)
    updateSpantext('currentBalance', depositNumber)

    document.getElementById('depositAmount').value = '';
});


// withdraw button handler
const withdrawBtn = document.getElementById('addWithdraw')
withdrawBtn.addEventListener('click', function() {
     const withdrawNumber = getInputNumber('withdrawAmount');
     updateSpantext('currentWithdraw',withdrawNumber);
    //  updateSpantext('currentBalance',-1* withdrawNumber) <==> this also canbe  used for decresing the amount
     minusSpantext('currentBalance', withdrawNumber)
    document.getElementById('withdrawAmount').value='';
})

function getInputNumber(id) {
    const amount = document.getElementById(id).value;
    const amountNumber = parseFloat(amount)
    return amountNumber;
}


function updateSpantext(id, depositNumber) {
    const current = document.getElementById(id).innerText;
    const currentNumber = parseFloat(current);
    const totalAmount = depositNumber + currentNumber;
    document.getElementById(id).innerText = totalAmount;
    
}

function minusSpantext(id, depositNumber) {
    const current = document.getElementById(id).innerText;
    const currentNumber = parseFloat(current);
    const totalAmount =  currentNumber - depositNumber ;
    
    if ( totalAmount > 0) {
        document.getElementById(id).innerText = totalAmount;
    } else {
        document.getElementById(id).innerText = "INSUFFICIENT";
        
    }
}