let valueDisplays = document.querySelectorAll(".num");
let interval = 2000; // Interval total

valueDisplays.forEach((valueDisplay) => {
  let startValue = 0;
  let endValue = parseInt(valueDisplay.getAttribute("data-val"));
  let duration = Math.floor(interval / endValue);
  
  let counter = setInterval(function () {
    startValue += 1;

    // Mempercepat saat angka mendekati endValue
    if (endValue - startValue <= 1) { // Jika selisih antara endValue dan startValue kurang dari atau sama dengan 10
      duration = Math.floor(duration / 1); // Mengurangi durasi agar angka lebih cepat
    }
    
    valueDisplay.textContent = startValue;

    if (startValue === endValue) {
      clearInterval(counter);
    }
  }, duration);
});

