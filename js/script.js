{
    const welcome = () => {
        console.log("Witam wszystkich dewsów i proszę o konstruktywną krytykę za którą serdecznie dziękuję :D");
    }

    const displayCurrencyValue = () => {
        const value = document.querySelector(".js-form__result");
        const inputValue = document.querySelector(".js-form__input");
        const exchangeWant = document.querySelector(".js-form__exchangeWant");

        const finalResult = inputValue.value / exchangeWant.value;
        value.innerText = finalResult.toFixed(2);
    }

    const calculation = () => {
        const exchangeWant = document.querySelector(".js-form__exchangeWant");
        const currencyWant = document.querySelector(".js-form__currencyWant");
        const currency = document.querySelector(".js-form__currency");

        currencyWant.innerText = exchangeWant.value;
        if (exchangeWant.value === "4.75") {
            currency.innerText = "EURO"
        }
        else if (exchangeWant.value === "4.90") {
            currency.innerText = "USD"
        }
        else {
            currency.innerText = "JPN";
        }
    }
    
    const buttonResult = () => {
        const formElement = document.querySelector(".js-form");
        formElement.addEventListener("submit", (event) => {
            event.preventDefault();
            displayCurrencyValue();
            calculation();
        });
    }

    const init = () => {
        welcome();
        buttonResult();
    }

    init();
}