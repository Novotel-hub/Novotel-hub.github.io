function calcAmount() {
    let price = 1000;
    let amountInput = document.querySelector("input[name='amount-input']");
    let showAmount = document.querySelector("span.show-amount");
    let amountNumber = parseInt(amountInput.value);
    
    amountNumber = isNaN(amountNumber) ? 0 : amountNumber

    if ( amountNumber > 10) {
        alert("Maximum 10 termeket vasarolhat!");
    } else if ( amountNumber <1 ) {
        alert("Minimum rendeles 1db termek");
    } else {
        let amount = amountNumber * price;
        showAmount.innerHTML = amount;
    }
    
}