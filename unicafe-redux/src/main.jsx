import ReactDOM from 'react-dom/client'

import { createStore } from 'redux'
import reducer from './reducers/counterReducer'
import Buttons from './components/Buttons'

const store = createStore(reducer)

const App = () => {

  return (
    <div>
      <Buttons store={store}/>
      <div>good {store.getState().good}</div>
      <div>ok {store.getState().ok}</div>
      <div>bad {store.getState().bad}</div>
    </div>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'))

const renderApp = () => {
  root.render(<App />)
}

renderApp()
store.subscribe(renderApp)
