import React from 'react'
import PropTypes from 'prop-types'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { updateAnecdote } from '../requests' 
import { useNotification } from '../NotificationContext'

const Anecdotes = ({ anecdotes }) => {
  const queryClient = useQueryClient()
  const { notification, setNotification } = useNotification()
  const mutation = useMutation({
    mutationFn: updateAnecdote,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['anecdotes'] })
    }
  })
  // 6.22 Anekdoottien äänestys queryn avulla
  const handleVote = (anecdote) => {
    mutation.mutate({ ...anecdote, votes: anecdote.votes + 1 })
    console.log('Anecdote voted:', anecdote)
    setNotification('You voted for: ' + anecdote.content)
  }
  
  return (
    <React.Fragment>
      {anecdotes.map(anecdote =>
        <div key={anecdote.id}>
          <div>
            {anecdote.content}
          </div>
          <div>
            has {anecdote.votes}
            <button onClick={() => handleVote(anecdote)}>vote</button>
          </div>
        </div>
      )}
    </React.Fragment>
  )
}

Anecdotes.propTypes = {
  anecdotes: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      content: PropTypes.string.isRequired,
      votes: PropTypes.number.isRequired
    })
  ).isRequired
}

export default Anecdotes
