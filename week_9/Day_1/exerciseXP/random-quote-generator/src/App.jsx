import { useState, useEffect } from 'react'
import QuoteBox from './QuoteBox.jsx'

const COLOR_PALETTES = [
  { background: '#16161a', quoteColor: '#7f5af0', buttonColor: '#2cb67d' },
  { background: '#1b1b2f', quoteColor: '#e94560', buttonColor: '#0f3460' },
  { background: '#f7f7f7', quoteColor: '#ff6b6b', buttonColor: '#4ecdc4' },
  // ...more palettes
]

function App() {
  const [palette, setPalette] = useState(COLOR_PALETTES[0])

  useEffect(() => {
    document.body.style.backgroundColor = palette.background
  }, [])

  function randomizePalette() {
    let next = palette
    while (next === palette) {
      next = COLOR_PALETTES[Math.floor(Math.random() * COLOR_PALETTES.length)]
    }
    setPalette(next)
    document.body.style.backgroundColor = next.background
  }

  return <QuoteBox palette={palette} onNewQuote={randomizePalette} />
}

export default App