import { createSlice } from '@reduxjs/toolkit'

// 6.12 Ilmoitukset createSlice-funktiona
const notificationSlice = createSlice({
  name: 'notification',
  initialState: '',
  reducers: {
    notify(state, action) {
      console.log('Ilmoitus: ', action.payload)
      return action.payload
    },
    clear(state) {
      console.log('Ilmoitus poistettu')
      return ''
    }
  }
});

let timeoutId

// 6.13 Paremmat anekdootit viiden sekunnin ajastimella
// 6.19 Paranneltu ilmoitusfunktio
export const setNotification = (message, duration = 5) => {
  return dispatch => {
    dispatch(notify(message))
    if (timeoutId) clearTimeout(timeoutId)
    timeoutId = setTimeout(() => {
      dispatch(clear())
    }, duration * 1000)
  }
}

export const { notify, clear } = notificationSlice.actions;
export default notificationSlice.reducer;