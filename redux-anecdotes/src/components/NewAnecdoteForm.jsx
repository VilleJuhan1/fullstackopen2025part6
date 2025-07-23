import { useDispatch } from 'react-redux'
import { createAnecdote} from '../reducers/anecdoteReducer'
import { setNotification } from '../reducers/notificationReducer'
import anecdotesService from '../services/anecdotesService'

// 6.4 Uuden anekdootin luominen
// 6.7 Uuden anekdootin luominen eriytettynä komponenttina
const NewAnecdoteForm = () => {
  const dispatch = useDispatch()

  // Anekdootin lisäyslomake ei-kontrolloituna funktiona
  const addAnecdote = async (event) => {
    event.preventDefault()
    const content = event.target.anecdote.value
    event.target.anecdote.value = ''
    // 6.15 Anekdoottien tallentaminen backendiin
    dispatch(createAnecdote(content))
    dispatch(setNotification(`You added '${content}'`, 5))
  }

  return (
    <div>
      <h3>Add a new anecdote</h3>
      <form onSubmit={addAnecdote} style={{ width: '100%' }}>
        <input
          name="anecdote"
          style={{ width: '50%', boxSizing: 'border-box', marginBottom: '8px' }}
        />
        <br />
        <button type="submit">add</button>
      </form>
      <br />
    </div>
  )
}

export default NewAnecdoteForm