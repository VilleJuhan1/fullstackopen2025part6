import { useEffect } from 'react'
import Anecdotes from './components/Anecdotes'
import NewAnecdoteForm from './components/NewAnecdoteForm'
import Notification from './components/Notification'
import Filter from './components/Filter'
import { initializeAnecdotes } from './reducers/anecdoteReducer'
import { useDispatch } from 'react-redux'

const App = () => {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(initializeAnecdotes())
  }, [])

  return (
    <div style={{ padding: '10px' }}>
      <Anecdotes />
      <Filter />
      <NewAnecdoteForm />
      <Notification />
    </div>
  )
}

export default App