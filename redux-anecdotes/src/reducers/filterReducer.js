import { createSlice } from '@reduxjs/toolkit'

// 6.9 Merkkijono-filteri omana reducerinaan
// 6.10 Merkkijono-filteri createSlice-funktiona
const filterSlice = createSlice({
  name: 'filter',
  initialState: '',
  reducers: {
    setFilter(state, action) {
      console.log('Filteri asetettu:', action.payload)
      return action.payload
    }
  }
})

export const { setFilter } = filterSlice.actions
export default filterSlice.reducer
