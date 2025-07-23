import { useSelector } from 'react-redux'

// 6.12 Notification komponentti
const Notification = () => {
  const notification = useSelector(state => state.notification)
  const style = {
    fontWeight: 'bold',
    fontStyle: 'italic'
  }
  return (
    <div style={style}>
      {notification}
    </div>
  )
}
export default Notification