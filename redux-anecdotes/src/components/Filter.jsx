import { useDispatch } from 'react-redux'
import { setFilter } from '../reducers/filterReducer'

// 6.9 Merkkijono-filteri omana komponenttinaan
const Filter = () => {
  const dispatch = useDispatch()

  const handleChange = (event) => {
    dispatch(setFilter(event.target.value))
  }
  const style = {
    marginBottom: 10
  }

  return (
    <div style={style}>
      filter <input onChange={handleChange} />
    </div>
  )
}

export default Filter