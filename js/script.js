let amountElement = document.querySelector(".js-amount");
let currencyElement = document.querySelector(".js-currency");
let formElement = document.querySelector(".js-form");
let resultElement = document.querySelector(".js-result");

let Dolar = 4.2813
let Euro = 4.6851
let Frank = 4.7364
let Boliwar = 0.0000017657


formElement.addEventListener("submit", (event) => {
    event.preventDefault();

    let amount = amountElement.value;
    let currency = currencyElement.value;

    let result = amount * currency

    switch (currency) {
        case "Dolar":
            result = amount / Dolar;
            break;
        case "Euro":
            result = amount / Euro;
            break
        case "Frank":
            result = amount / Frank;
            break
        case "Boliwar":
            result = amount / Boliwar
    }



    resultElement.innerText = result.toFixed(2)

})

