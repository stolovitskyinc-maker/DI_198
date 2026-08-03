import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

// Simulate a network/async delay
const wait = (ms) => new Promise((resolve) => setTimeout(resolve, ms))

// Async thunk: increment age after a simulated delay
export const ageUpAsync = createAsyncThunk(
  'age/ageUpAsync',
  async (_, { getState }) => {
    await wait(1000)
    const currentAge = getState().age.age
    return currentAge + 1
  }
)

// Async thunk: decrement age after a simulated delay
export const ageDownAsync = createAsyncThunk(
  'age/ageDownAsync',
  async (_, { getState }) => {
    await wait(1000)
    const currentAge = getState().age.age
    // Prevent age from going below 0
    return Math.max(0, currentAge - 1)
  }
)

const initialState = {
  age: 25,
  loading: false,
  error: null,
}

const ageSlice = createSlice({
  name: 'age',
  initialState,
  reducers: {
    // Synchronous reducers, included for completeness
    setLoading: (state, action) => {
      state.loading = action.payload
    },
    setAge: (state, action) => {
      state.age = action.payload
    },
  },
  extraReducers: (builder) => {
    builder
      // ageUpAsync lifecycle
      .addCase(ageUpAsync.pending, (state) => {
        state.loading = true
        state.error = null
      })
      .addCase(ageUpAsync.fulfilled, (state, action) => {
        state.age = action.payload
        state.loading = false
      })
      .addCase(ageUpAsync.rejected, (state, action) => {
        state.loading = false
        state.error = action.error.message
      })
      // ageDownAsync lifecycle
      .addCase(ageDownAsync.pending, (state) => {
        state.loading = true
        state.error = null
      })
      .addCase(ageDownAsync.fulfilled, (state, action) => {
        state.age = action.payload
        state.loading = false
      })
      .addCase(ageDownAsync.rejected, (state, action) => {
        state.loading = false
        state.error = action.error.message
      })
  },
})

export const { setLoading, setAge } = ageSlice.actions
export default ageSlice.reducer
