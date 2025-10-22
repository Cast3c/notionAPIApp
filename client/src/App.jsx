import { useState, useEffect } from 'react'
import Header from './components/Header'
import Pomodoro from './components/Pomodoro'
import Tasks from './components/Tasks'
import Notes from './components/Notes'
import Habits from './components/Habits'
import api from './services/api'
import './styles/App.css'

function App() {
  const [ data, setData ] = useState([])
  const [ user, setUser ] = useState({
    name:'',
    email:'',
    avatar:''
  })
  
    
  useEffect(() => {
    const fetchData = async () => {
      try {
        const tasks = await api.getData()
        setData(tasks.results)
        setUser( 
          {
            name: 'Ricardo Castellarp',
            email: 'ricardo.castellarp@gmail.com',
            avatar: 'https://avatars.githubusercontent.com/u/52213003?v=4'
          }
        )
      } catch (error) {
        console.error('Error fetching data: ', error) 
      }
    }
    fetchData()
  },[])

  const logout = () => {

  }
   
  return (
    <div className='app-container'>
      <Header user={ user } logout={ logout }/> 
      { user ? (
        <main className='dashboard'>
          <Pomodoro />
          <Tasks data={data} /> 
          <Notes user={ user } />
          <Habits user={ user } />
        </main>
      ):(
        <p>Por favor inicia sesion para acceder a tu panel.</p>
      )}
    </div>
  );
}

export default App
