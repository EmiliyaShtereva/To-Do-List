import './App.css'
import List from './components/list/List'
import WeekDays from './components/week-days/WeekDays'

function App() {

  return (
    <div className='container'>
      <WeekDays />
      <List />
    </div>
  )
}

export default App
