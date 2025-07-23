import anecdoteReducer from './anecdoteReducer'
import deepFreeze from 'deep-freeze'

describe('anecdoteReducer', () => {
  const initialState = [
    {
      content: 'If it tastes like shit, smells like shit and feels like shit, it probably is shit.',
      id: 1,
      votes: 0
    },
    {
      content: 'The app state is in redux store.',
      id: 2,
      votes: 0
    }
  ]

  // 6.3 Äänestäminen toimii
  test('increments votes when VOTE action is dispatched', () => {
    const action = {
      type: 'anecdotes/voteAnecdote',
      payload: 2 
    }

    deepFreeze(initialState)
    const newState = anecdoteReducer(initialState, action)
    //console.log(`uusi tila: ${JSON.stringify(newState)}`)

    expect(newState).toHaveLength(2)
    expect(newState.find(a => a.id === 2).votes).toBe(1)
    expect(newState.find(a => a.id === 1).votes).toBe(0)
  })
})