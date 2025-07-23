import AnecdoteForm from './components/AnecdoteForm'
import Notification from './components/Notification'
import Anecdotes from './components/Anecdotes'
import { useQuery } from '@tanstack/react-query'
import { getAnecdotes } from './requests'
import { NotificationProvider } from './NotificationContext'

const App = () => {
  const { data, isLoading, isError } = useQuery({
    queryKey: ['anecdotes'],
    queryFn: getAnecdotes,
    retry: 2,
    refetchOnWindowFocus: false
  })

  if (isLoading) {
    console.log('loading data...')
    return <div>loading data...</div>
  }

  // 6.20 Virheen käsittely, kun anekdootteja ei saada palvelimelta
  if (isError) {
    console.error('Error fetching anecdotes')
    return <div>anecdote service is not available due to problems in the server</div>
  }

  console.log('data fetched:', data)

  // Muut komponentit asetetaan NotificationProviderin sisään, jotta ne voivat käyttää ilmoituksia
  return (
    <NotificationProvider>
      <h3>Anecdote app</h3>
      <Notification />
      <AnecdoteForm />
      <Anecdotes anecdotes={data}/>
    </NotificationProvider>
  )
}

export default App
