import React from 'react'
import { useSelector } from 'react-redux'

function AgeDisplay() {
  const age = useSelector((state) => state.age.age)
  const loading = useSelector((state) => state.age.loading)

  return (
    <div className="age-display">
      <p className="age-label">Current Age</p>
      <div className="age-value-row">
        <span className="age-value">{age}</span>
        {loading && <span className="spinner" role="status" aria-label="Updating age" />}
      </div>
    </div>
  )
}

export default AgeDisplay
