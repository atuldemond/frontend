function updateWordCount() {
  const textArea = document.getElementById("text-area");
  const wordCountDisplay = document.getElementById("word-count");
  const text = textArea.value.trim();

  // Calculate the word count
  const words = text.split(/\s+/).filter((word) => word.length > 0);
  const wordCount = words.length;

  // Update word count display
  wordCountDisplay.textContent = `${wordCount}/300 words`;

  // Change color if limit exceeded
  if (wordCount > 300) {
    wordCountDisplay.classList.add("limit-exceeded");
  } else {
    wordCountDisplay.classList.remove("limit-exceeded");
  }

  // Prevent typing if limit is exceeded
  if (wordCount > 300) {
    textArea.value = words.slice(0, 300).join(" ");
  }
}
