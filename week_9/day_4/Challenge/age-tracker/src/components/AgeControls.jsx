import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { ageUpAsync, ageDownAsync } from '../features/age/ageSlice'

function AgeControls() {
  const dispatch = useDispatch()
  const loading = useSelector((state) => state.age.loading)

  const handleSubmit = (e) => {
    e.preventDefault()
  }

  return (
    <form className="age-controls" onSubmit={handleSubmit}>
      <button
        type="button"
        className="btn btn-up"
        onClick={() => dispatch(ageUpAsync())}
        disabled={loading}
      >
        Age Up
      </button>
      <button
        type="button"
        className="btn btn-down"
        onClick={() => dispatch(ageDownAsync())}
        disabled={loading}
      >
        Age Down
      </button>
    </form>
  )
}

export default AgeControls
