{

    const calculateResult = (amount, currency) => {
        const Dolar = 4.2813
        const Euro = 4.6851
        const Frank = 4.7364
        const Boliwar = 0.0000017657

        switch (currency) {
            case "Dolar":
                return amount / Dolar;

            case "Euro":
                return amount / Euro;

            case "Frank":
                return amount / Frank;

            case "Boliwar":
                return amount / Boliwar
        }
    };

    const updateResultSubmit = (result) => {
        const resultElement = document.querySelector(".js-result");

        resultElement.innerText = result.toFixed(2)

    }

    const onFormSubmit = (event) => {
        event.preventDefault();

        const amountElement = document.querySelector(".js-amount");
        const currencyElement = document.querySelector(".js-currency");

        let result = calculateResult(amountElement.value, currencyElement.value);

        updateResultSubmit(result);

    }

    const init = () => {
        const formElement = document.querySelector(".js-form");

        formElement.addEventListener("submit", onFormSubmit);
    };

    init();
}