function analyzeSentiment() {
    let text = document.getElementById("userInput").value.toLowerCase();
    let resultElement = document.getElementById("result");

    // Keywords for sentiment analysis
    let positiveWords = ["happy", "good", "great", "awesome", "love", "amazing", "excellent"];
    let negativeWords = ["sad", "bad", "terrible", "hate", "awful", "worst", "angry"];

    let positiveScore = 0;
    let negativeScore = 0;

    // Split text into words and check sentiment
    let words = text.split(/\s+/);
    words.forEach(word => {
        if (positiveWords.includes(word)) {
            positiveScore++;
        } else if (negativeWords.includes(word)) {
            negativeScore++;
        }
    });

    // Determine sentiment
    if (positiveScore > negativeScore) {
        resultElement.textContent = "😊 Positive Sentiment!";
        resultElement.style.color = "green";
    } else if (negativeScore > positiveScore) {
        resultElement.textContent = "😡 Negative Sentiment!";
        resultElement.style.color = "red";
    } else {
        resultElement.textContent = "😐 Neutral Sentiment!";
        resultElement.style.color = "gray";
    }
}
