import { useState } from 'react'
import './App.css'
import Form from './components/Form'
import Users from './components/Users';

function App() {
  const [users, setUsers] = useState([]);

  const handlePersonal = (personal)=>{
    console.log(personal);

    const newData = [...users, personal];
    setUsers(newData)
  }

  return (
    <>
    <div className='body'>
     <Form onsubmit={handlePersonal} />
     <Users list={users} />
     </div>
    </>
  )
}

export default App
