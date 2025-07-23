import { createContext, useReducer, useContext } from 'react'
import { notificationReducer } from './reducers/NotificationReducer'

const NotificationContext = createContext()

// 6.23 NotificationContextin luominen
// eslint-disable-next-line
export const NotificationProvider = ({ children }) => {
  const [notification, dispatch] = useReducer(notificationReducer, '')

  // 6.23 Ilmoituksen asettaminen ja tyhjentäminen, oletuskesto 5 sekuntia
  const setNotification = (message, duration = 5000) => {
    dispatch({ type: 'SET', payload: message })
    setTimeout(() => {
      dispatch({ type: 'CLEAR' })
    }, duration)
  }

  return (
    <NotificationContext.Provider value={{ notification, setNotification }}>
      {children}
    </NotificationContext.Provider>
  )
}
// Muut komponentit voivat muokata ilmoitusten tilaa tämän kautta
// eslint-disable-next-line
export const useNotification = () => {
  return useContext(NotificationContext)
}
