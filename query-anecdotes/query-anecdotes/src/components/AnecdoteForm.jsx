import { useMutation, useQueryClient } from '@tanstack/react-query'
import { createAnecdote } from '../requests' 
import { useNotification } from '../NotificationContext'

// 6.21 Uuden anekdootin luominen React Queryn avulla
const AnecdoteForm = () => {
  const queryClient = useQueryClient()
  const { notification, setNotification } = useNotification()
  const mutation = useMutation({
    mutationFn: createAnecdote,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['anecdotes'] })
      console.log('Anecdote created successfully')
    },
    onError: (error) => {
      setNotification('Error creating anecdote: ' + error.message)
      console.error('Error creating anecdote:', error)
    }
  })

  // 6.24 Liian lyhyt anekdootti estetään
  const onCreate = (event) => {
    event.preventDefault()
    const content = event.target.anecdote.value
    event.target.anecdote.value = ''
    if (!content.trim() || content.trim().length < 5) {
      setNotification('Anecdote content must be at least 5 characters long')
      console.warn('Anecdote content is too short:', content)
      return
    }
    mutation.mutate({ content, votes: 0 })
    setNotification('New anecdote created: ' + content)
  }

  return (
    <div>
      <h3>create new</h3>
      <form onSubmit={onCreate}>
        <input name='anecdote' />
        <button type="submit">create</button>
      </form>
    </div>
  )
}

export default AnecdoteForm
