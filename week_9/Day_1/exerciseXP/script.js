// quotes is provided globally by QuotesDatabase.js (loaded before this file)

const quoteTextEl = document.getElementById('quoteText');
const quoteAuthorEl = document.getElementById('quoteAuthor');
const quoteCountEl = document.getElementById('quoteCount');
const nextBtn = document.getElementById('nextBtn');
const root = document.documentElement;

let lastIndex = -1;

function pickNewIndex() {
  if (quotes.length === 1) return 0;
  let idx;
  do {
    idx = Math.floor(Math.random() * quotes.length);
  } while (idx === lastIndex);
  return idx;
}

function randomBetween(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function applyRandomTheme() {
  const hue = randomBetween(0, 359);

  const bg = `hsl(${hue}, 46%, 93%)`;
  const card = `hsl(${hue}, 60%, 99%)`;
  const quoteColor = `hsl(${hue}, 38%, 18%)`;
  const btnBg = `hsl(${hue}, 52%, 32%)`;
  const btnText = `hsl(${hue}, 60%, 97%)`;
  const markColor = `hsla(${hue}, 45%, 30%, 0.10)`;

  root.style.setProperty('--bg', bg);
  root.style.setProperty('--card', card);
  root.style.setProperty('--quote-color', quoteColor);
  root.style.setProperty('--btn-bg', btnBg);
  root.style.setProperty('--btn-text', btnText);
  root.style.setProperty('--mark-color', markColor);
}

function renderQuote(index) {
  const item = quotes[index];
  quoteTextEl.classList.remove('fade');
  void quoteTextEl.offsetWidth; // restart animation
  quoteTextEl.classList.add('fade');

  quoteTextEl.textContent = item.quote;
  quoteAuthorEl.textContent = item.author && item.author.trim() ? `— ${item.author}` : '— Unknown';
  quoteCountEl.textContent = `${index + 1} / ${quotes.length}`;
  lastIndex = index;
}

function showNewQuote() {
  const idx = pickNewIndex();
  renderQuote(idx);
  applyRandomTheme();

  nextBtn.classList.add('spin');
  setTimeout(() => nextBtn.classList.remove('spin'), 320);
}

nextBtn.addEventListener('click', showNewQuote);

// initial render
renderQuote(pickNewIndex());
applyRandomTheme();
