import { useSelector, useDispatch } from 'react-redux'
import { voteAnecdoteAsync } from '../reducers/anecdoteReducer'
import { setNotification } from '../reducers/notificationReducer'

// 6.8 Anekdoottilista omana komponenttinaan
const Anecdotes = () => {
  const anecdotes = useSelector(state => state.anecdotes)
  const filter = useSelector(state => state.filter)
  const dispatch = useDispatch()

  // 6.9 Anekdoottien filteröinti merkkijonovastaavuuden perusteella
  const filteredAnecdotes = (anecdotes || []).filter(anecdote =>
    anecdote.content.toLowerCase().includes(filter.toLowerCase())
  )

  // 6.5 Anekdootit suuruusjärjestykseen äänimäärän mukaan
  const sortedAnecdotes = [...filteredAnecdotes].sort((a, b) => b.votes - a.votes)

  // 6.19 Notifikaatiolle voi määrittää keston (oletus 5 sekuntia)
  const handleVote = (id) => {
    dispatch(voteAnecdoteAsync(id))
    const votedAnecdote = anecdotes.find(anecdote => anecdote.id === id)
    dispatch(setNotification(`You voted '${votedAnecdote.content}'`, 2))
  }

  return (
    <div>
      <h2>Anecdotes</h2>
      {sortedAnecdotes.map(({ id, content, votes }) => (
        <div key={id} style={{ marginBottom: '5px' }}>
          <div>{content}</div>
          <div>
            has {votes} votes{' '}
            <button onClick={() => handleVote(id)}>vote</button>
          </div>
        </div>
      ))}
    </div>
  )
}

export default Anecdotes