const initialState = {
  good: 0,
  ok: 0,
  bad: 0
}

// 6.1 Laskurin tilan reducer
const counterReducer = (state, action) => {
  console.log(action)
  switch (action.type) {
    case 'GOOD':
      const goodState = {
        ...state,
        good: state.good + 1
      }
      return goodState
    case 'OK':
      const okState = {
        ...state,
        ok: state.ok + 1
      }
      return okState
    case 'BAD':
      const badState = {
        ...state,
        bad: state.bad + 1
      }
      return badState
    case 'ZERO':
      return initialState
    default: return initialState
  }
  
}

export default counterReducer
