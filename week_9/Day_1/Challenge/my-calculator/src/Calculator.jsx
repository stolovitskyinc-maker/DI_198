import { useState } from 'react'

const OPERATIONS = {
  add: { label: 'Addition (+)', symbol: '+' },
  subtract: { label: 'Subtraction (−)', symbol: '−' },
  multiply: { label: 'Multiplication (×)', symbol: '×' },
  divide: { label: 'Division (÷)', symbol: '÷' },
}

function calculate(num1, num2, operation) {
  switch (operation) {
    case 'add':
      return num1 + num2
    case 'subtract':
      return num1 - num2
    case 'multiply':
      return num1 * num2
    case 'divide':
      return num2 === 0 ? null : num1 / num2
    default:
      return null
  }
}

function Calculator() {
  const [firstNumber, setFirstNumber] = useState('')
  const [secondNumber, setSecondNumber] = useState('')
  const [operation, setOperation] = useState('add')
  const [result, setResult] = useState(null)
  const [error, setError] = useState('')

  function handleCalculate() {
    const num1 = parseFloat(firstNumber)
    const num2 = parseFloat(secondNumber)

    if (isNaN(num1) || isNaN(num2)) {
      setError('Please enter two valid numbers.')
      setResult(null)
      return
    }

    if (operation === 'divide' && num2 === 0) {
      setError('Cannot divide by zero.')
      setResult(null)
      return
    }

    setError('')
    setResult(calculate(num1, num2, operation))
  }

  return (
    <div
      style={{
        backgroundColor: '#ffffff',
        padding: '2.5rem',
        borderRadius: '16px',
        maxWidth: '380px',
        width: '90%',
        textAlign: 'center',
        boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1)',
      }}
    >
      <h1 style={{ fontSize: '1.5rem', marginBottom: '1.5rem' }}>
        React Calculator
      </h1>

      <input
        type="number"
        placeholder="First number"
        value={firstNumber}
        onChange={(e) => setFirstNumber(e.target.value)}
        style={inputStyle}
      />

      <select
        value={operation}
        onChange={(e) => setOperation(e.target.value)}
        style={inputStyle}
      >
        {Object.entries(OPERATIONS).map(([key, { label }]) => (
          <option key={key} value={key}>
            {label}
          </option>
        ))}
      </select>

      <input
        type="number"
        placeholder="Second number"
        value={secondNumber}
        onChange={(e) => setSecondNumber(e.target.value)}
        style={inputStyle}
      />

      <button onClick={handleCalculate} style={buttonStyle}>
        Calculate
      </button>

      {error && <p style={{ color: '#e63946', marginTop: '1rem' }}>{error}</p>}

      {result !== null && !error && (
        <p style={{ marginTop: '1.5rem', fontSize: '1.3rem' }}>
          {firstNumber} {OPERATIONS[operation].symbol} {secondNumber} ={' '}
          <strong>{result}</strong>
        </p>
      )}
    </div>
  )
}

const inputStyle = {
  display: 'block',
  width: '100%',
  padding: '0.7rem',
  marginBottom: '1rem',
  fontSize: '1rem',
  borderRadius: '8px',
  border: '1px solid #ccc',
}

const buttonStyle = {
  width: '100%',
  padding: '0.8rem',
  fontSize: '1rem',
  backgroundColor: '#4361ee',
  color: '#fff',
  border: 'none',
  borderRadius: '8px',
  cursor: 'pointer',
}

export default Calculator
