{
    const welcome = () => {
        console.log("Witam wszystkich dewsów i proszę o konstruktywną krytykę za którą serdecznie dziękuję :D");
    }
    
    const init = () => {
        welcome();
    }
    
    const formElement = document.querySelector(".js-form");
    const exchangeWant = document.querySelector(".js-form__exchangeWant");
    const currencyWant = document.querySelector(".js-form__currencyWant");
    const currency = document.querySelector(".js-form__currency");
    
    const displayCurrencyValue = () => {
        const value = document.querySelector(".js-form__result");
        const inputValue = document.querySelector(".js-form__input");
        const exchangeWant = document.querySelector(".js-form__exchangeWant");

        const finalResult = inputValue.value / exchangeWant.value;
        value.innerText = finalResult.toFixed(2);
    }
    
    formElement.addEventListener("submit", (event) => {
        event.preventDefault();
        displayCurrencyValue();
    
        currencyWant.innerText = exchangeWant.value;
    
        if(exchangeWant.value === "4.75") {
            currency.innerText = "EURO"
        }
        else if(exchangeWant.value === "4.90") {
            currency.innerText = "USD"
        }
        else {
            currency.innerText = "JPN";
        }
    });
    
    init();
}