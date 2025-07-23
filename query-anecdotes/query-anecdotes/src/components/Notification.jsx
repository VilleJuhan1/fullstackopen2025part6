
import PropTypes from 'prop-types'
import { useNotification } from '../NotificationContext'

const styles = {
  notification: {
    border: '2px solid #333',
    padding: '1rem',
    marginBottom: '1rem',
    borderRadius: '5px',
    backgroundColor: '#f0f0f0',
    color: '#333',
  }
}

// Ilmoituksista vastaava komponentti
const Notification = () => {
  const { notification } = useNotification()

  if (!notification) return null

  return (
    <div style={styles.notification}>
      {notification}
    </div>
  )
}

Notification.propTypes = {
  notification: PropTypes.string
}

export default Notification