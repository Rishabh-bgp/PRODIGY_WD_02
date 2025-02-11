// Cache DOM elements
const startBtn = document.getElementById('start');
const stopBtn = document.getElementById('stop');
const resetBtn = document.getElementById('reset');
const hrElement = document.getElementById('hr');
const minElement = document.getElementById('min');
const secElement = document.getElementById('sec');
const countElement = document.getElementById('count');

// Initialize variables
let timer = false;
let hour = 0;
let minute = 0;
let second = 0;
let count = 0;
let animationFrameId;

// Helper function to format numbers
const formatNumber = num => num < 10 ? `0${num}` : num.toString();

// Update DOM elements efficiently
const updateDisplay = () => {
    hrElement.textContent = formatNumber(hour);
    minElement.textContent = formatNumber(minute);
    secElement.textContent = formatNumber(second);
    countElement.textContent = formatNumber(count);
};

function stopWatch() {
    if (!timer) return;

    count++;

    if (count === 100) {
        second++;
        count = 0;
    }

    if (second === 60) {
        minute++;
        second = 0;
    }

    if (minute === 60) {
        hour++;
        minute = 0;
        second = 0;
    }

    updateDisplay();
    animationFrameId = requestAnimationFrame(stopWatch);
}

// Event Listeners
startBtn.addEventListener('click', () => {
    timer = true;
    stopWatch();
});

stopBtn.addEventListener('click', () => {
    timer = false;
    cancelAnimationFrame(animationFrameId);
});

resetBtn.addEventListener('click', () => {
    timer = false;
    cancelAnimationFrame(animationFrameId);
    hour = minute = second = count = 0;
    updateDisplay();
});
