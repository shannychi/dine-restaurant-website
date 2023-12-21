document.addEventListener("DOMContentLoaded", function () {
    let currentSlide = 0;
    const slides = document.querySelectorAll('.whitebackground');

    function showSlide(index) {
        slides.forEach((whitebackground, i) => {
            whitebackground.style.display = i === index ? 'block' : 'none';
        });
    }

    function nextSlide() {
        currentSlide = (currentSlide + 1) % slides.length;
        showSlide(currentSlide);
    }

    setInterval(nextSlide, 3000);

    showSlide(currentSlide);
});



const hourSelect = document.getElementById("hour");
const minuteSelect = document.getElementById("minute");

for (let i = 0; i <= 23; i++) {
    const option = document.createElement("option");
    option.value = i < 10 ? `0${i}` : `${i}`;
    option.text = i < 10 ? `0${i}` : `${i}`;
    hourSelect.add(option);
}

for (let i = 0; i <= 59; i++) {
    const option = document.createElement("option");
    option.value = i < 10 ? `0${i}` : `${i}`;
    option.text = i < 10 ? `0${i}` : `${i}`;
    minuteSelect.add(option);
};


function increment() {
    const numberInput = document.getElementById("numberInput");
    let currentValue = parseInt(numberInput.value, 10);
    numberInput.value = currentValue + 1;
}



function decrement() {
    const numberInput = document.getElementById("numberInput");
    let currentValue = parseInt(numberInput.value, 10);
    if (currentValue > 0) {
        numberInput.value = currentValue - 1;
    }
};