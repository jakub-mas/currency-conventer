{
    const calculateResult = (amount, currency) => {
        const rateUSD = 4.2813
        const rateEUR = 4.6851
        const rateCHF = 4.7364
        const rateVEF = 0.0000017657

        switch (currency) {
            case "USD":
                return amount / rateUSD;

            case "EUR":
                return amount / rateEUR;

            case "CHF":
                return amount / rateCHF;

            case "VEF":
                return amount / rateVEF
        }
    };

    const updateResultText = (result) => {
        const resultElement = document.querySelector(".js-result");
        resultElement.innerText = result.toFixed(2);

    }

    const onFormSubmit = (event) => {
        event.preventDefault();
        const amountElement = document.querySelector(".js-amount");
        const currencyElement = document.querySelector(".js-currency");

        let result = calculateResult(amountElement.value, currencyElement.value);

        updateResultText(result);

    }

    const init = () => {
        const formElement = document.querySelector(".js-form");

        formElement.addEventListener("submit", onFormSubmit);
    };

    init();
}