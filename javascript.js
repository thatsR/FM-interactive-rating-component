const ratingContainer = document.getElementById("rating-container");
const thankYouContainer = document.getElementById("thank-you-container");
const submitButton = document.getElementById("submit-form");
const body = document.body;
const rating = document.getElementById("rating");
const rates = document.querySelectorAll(".btn");

submitButton.addEventListener("click", () => {
    ratingContainer.classList.add("hidden");
    thankYouContainer.classList.remove("hidden");
});

rates.forEach((rate) => {
    rate.addEventListener("click", () => {
        rating.innerHTML = rate.innerHTML;
    });
});