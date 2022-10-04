const welcome = () => {
    console.log("Witam wszystkich dewsów i proszę o konstruktywną krytykę za którą serdecznie dziękuję :D");
}

const init = () => {
    welcome();
}

let formElement = document.querySelector(".js-form");
let inputValue = document.querySelector(".js-form__input");
let exchangeWant = document.querySelector(".js-form__exchangeWant");
let currencyWant = document.querySelector(".js-form__currencyWant");
let value = document.querySelector(".js-form__result");
let currency = document.querySelector(".js-form__currency");

formElement.addEventListener("submit", (event) => {
    event.preventDefault();

    let finalResult = inputValue.value / exchangeWant.value;
    // console.log(finalResult);

    currencyWant.innerText = exchangeWant.value;

    value.innerText = finalResult.toFixed(2);

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