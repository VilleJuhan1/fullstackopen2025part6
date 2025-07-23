import { createSlice } from '@reduxjs/toolkit'
import anecdotesService from '../services/anecdotesService'

/* 6.14 Anekdootit siirretty tietokannan vastuulle
const anecdotesAtStart = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

const asObject = (anecdote) => {
  return {
    content: anecdote,
    id: getId(),
    votes: 0
  }
}

const initialState = anecdotesAtStart.map(asObject) */

// const getId = () => (100000 * Math.random()).toFixed(0)

// 6.11 Anekdoottien käsittely createSlice-funktiona
const anecdoteSlice = createSlice({
  name: 'anecdotes',
  initialState: [],
  reducers: {
    // 6.3 Äänestäminen toimii
    voteAnecdote(state, action) {
      const id = action.payload
      const anecdoteToVote = state.find(a => a.id === id)
      if (anecdoteToVote) {
        anecdoteToVote.votes += 1
      }
      console.log('Äänestys:', JSON.parse(JSON.stringify(state)))
    }, 
    setAnecdotes(state, action) {
      return action.payload
    },
    appendAnecdote(state, action) {
      state.push(action.payload)
      console.log('Anekdootti lisätty:', JSON.parse(JSON.stringify(state)))
    }
  }
})

export const { voteAnecdote, setAnecdotes, appendAnecdote } = anecdoteSlice.actions

export const initializeAnecdotes = () => {
  return async dispatch => {
    const anecdotes = await anecdotesService.getAll()
    dispatch(setAnecdotes(anecdotes))
  }
}
// 6.17 Anekdootin luominen asynkronisesti
export const createAnecdote = (content) => {
  return async dispatch => {
    const newAnecdote = await anecdotesService.createNew(content)
    dispatch(appendAnecdote(newAnecdote))
  }
}
// 6.18 Anekdootin äänestys asynkronisena operaationa
export const voteAnecdoteAsync = (id) => {
  return async dispatch => {
    const updatedAnecdote = await anecdotesService.voteAnecdote(id)
    dispatch(voteAnecdote(updatedAnecdote.id))
  }
}

export default anecdoteSlice.reducer