let progress = 0;
const progressBar = document.getElementById("progress-bar");
const progressText = document.getElementById("progress-text");
const downloadBtn = document.getElementById("download-btn");

const interval = setInterval(() => {
  if (progress >= 100) {
    clearInterval(interval);
    progressText.textContent = "Completed";
    downloadBtn.style.display = "inline-block";
  } else {
    progress += 1;
    progressBar.style.width = progress + "%";
    progressText.textContent = progress + "%";
  }
}, 100);
