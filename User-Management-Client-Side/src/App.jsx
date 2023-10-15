
import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [users,setUsers]=useState([]);

  useEffect(()=>{
    fetch('http://localhost:5000/users')
    .then(res=>res.json())
    .then(data=>setUsers(data));
  },[])

  return (
    <>
      <h1>User Management System</h1>
      <h1>Number of users {users.length}</h1>
<div>
  {
    users.map
  }
</div>

    </>
  )
}

export default App
