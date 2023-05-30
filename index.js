const rateContainer = document.querySelector('.rating-card');
const thankContainer = document.querySelector('.thankyou-state');
const submitBtn = document.getElementById('submitRate');
const rateAgain = document.getElementById('rate-Again');
const ratings = document.getElementById('rate');
const rateBtn = document.querySelectorAll('.btn');

submitBtn.addEventListener('click', () => {
    thankContainer.classList.remove("hidden");
    rateContainer.style.display = "none";
})

rateAgain.addEventListener('click', () => {
    thankContainer.classList.add("hidden");
    rateContainer.style.display = "block";
})

rateBtn.forEach((rate) => {
    rate.addEventListener('click', () => {
        ratings.innerHTML = rate.innerHTML;
    })
})