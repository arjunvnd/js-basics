const debounceButton = document.querySelector("#debounce-button");
const debounceClickCount = document.querySelector("#debounce-click-count");
const debounceTriggerCount = document.querySelector("#debounce-trigger-count");
let debounceClicks = 0;
let debounceTrigger = 0;

const makeDebounceFunction = (cb, delay) => {
  let timer = null;
  return function (...args) {
    if (timer) clearInterval(timer);
    timer = setTimeout(() => {
      cb(...args);
    }, delay);
  };
};

const debounceClick = makeDebounceFunction(() => {
  debounceTrigger += 1;
  console.log("Triggred");
  debounceTriggerCount.innerHTML = debounceTrigger;
}, 800);

debounceButton.addEventListener("click", () => {
  debounceClicks += 1;
  debounceClickCount.innerHTML = debounceClicks;
  debounceClick(1, 2, 3);
});

// -------------------- Throttle --------------------------------

const throttleButton = document.querySelector("#throttle-button");
const throttleClickCount = document.querySelector("#throttle-click-count");
const throttleTriggerCount = document.querySelector("#throttle-trigger-count");
let throttleClicks = 0;
let throttleTrigger = 0;

const makeThrottleFunction = (cb, delay) => {
  // The function should be called on a delay - delay
  let lastCalled = 0;
  return function (...args) {
    const timeInterval = Date.now() - lastCalled;
    if (timeInterval < delay) return;
    lastCalled = Date.now();
    cb(...args);
  };
};

const throttleClick = makeThrottleFunction(() => {
  throttleTrigger += 1;
  throttleTriggerCount.innerHTML = throttleTrigger;
}, 2000);

throttleButton.addEventListener("click", () => {
  throttleClicks += 1;
  throttleClickCount.innerHTML = throttleClicks;
  throttleClick();
});
