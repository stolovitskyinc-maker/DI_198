import { useState } from 'react'
import quotes from './QuotesDatabase.js'

function getRandomIndex(excludeIndex) {
  let index = excludeIndex
  while (index === excludeIndex) {
    index = Math.floor(Math.random() * quotes.length)
  }
  return index
}

function QuoteBox({ palette, onNewQuote }) {
  const [quoteIndex, setQuoteIndex] = useState(() =>
    Math.floor(Math.random() * quotes.length)
  )
  const currentQuote = quotes[quoteIndex]

  function handleNewQuote() {
    setQuoteIndex((prevIndex) => getRandomIndex(prevIndex))
    onNewQuote()
  }

  return (
    <div style={{ backgroundColor: palette.background, /* ... */ }}>
      <h1 style={{ color: palette.quoteColor }}>“{currentQuote.quote}”</h1>
      <p style={{ color: palette.quoteColor }}>
        {currentQuote.author ? `— ${currentQuote.author}` : '— Unknown'}
      </p>
      <button
        onClick={handleNewQuote}
        style={{ backgroundColor: palette.buttonColor, color: '#fff' }}
      >
        New Quote
      </button>
    </div>
  )
}

export default QuoteBox