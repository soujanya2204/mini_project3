const quotes = [
  "The only limit to our realization of tomorrow is our doubts of today.",
  "Do not go where the path may lead, go instead where there is no path and leave a trail. – Ralph Waldo Emerson",
  "In the end, we will remember not the words of our enemies, but the silence of our friends. – Martin Luther King Jr.",
  "Success is not final, failure is not fatal: It is the courage to continue that counts. – Winston Churchill",
  "It always seems impossible until it's done.– Nelson Mandela",
  "What lies behind us and what lies before us are tiny matters compared to what lies within us. – Ralph Waldo Emerson",
  "You miss 100% of the shots you don’t take.– Wayne Gretzky",
  "Happiness is not something ready made. It comes from your own actions.– Dalai Lama",
  "Life is what happens when you're busy making other plans.– John Lennon",
  "The only way to do great work is to love what you do. – Steve Jobs",
];
const usedIndexes = new Set();
const quoteElement = document.getElementById("quote");
function generateQuote() {
  if (usedIndexes.size >= quotes.length) {
    usedIndexes.clear();
  }
  while (true) {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    if (usedIndexes.has(randomIndex)) continue;
    const quote = quotes[randomIndex];
    quoteElement.innerHTML = quote;
    usedIndexes.add(randomIndex);
    break;
  }
}
