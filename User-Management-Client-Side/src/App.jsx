
import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [users,setUsers]=useState([]);

  useEffect(()=>{
    fetch('http://localhost:5000/users')
    .then(res=>res.json())
    .then(data=>setUsers(data));
  },[])

  const handleSubmitUser=(event)=>{
    event.preventDefault();
    const form=event.target;
    const name=form.name.value;
    const email=form.email.value;
    const newUser={name,email}
    fetch('http://localhost:5000/users',{
      method:'POST',
      headers:{
        'content-type':'application/json'
      },
      body:JSON.stringify(newUser)
    })
    .then(res=>res.json())
    .then(data=>console.log(data));
   
    const Newusers=[...users,data];
    setUsers(Newusers);
    form.reset();

    console.log(newUser);
  }

  return (
    <>
      <h1>User Management System</h1>
      <h1>Number of users {users.length}</h1>
      <form onSubmit={handleSubmitUser} action="">
      <input type="text" name='name'  placeholder='Name'/> <br />
      <input type="email" name='email'  placeholder='Email'/><br />
      <input type="submit" />
      </form>
<div>
  {
    users.map(user=> <p key={user.id}> {user.id}. {user.name}:{user.email}</p>)
  }
</div>

    </>
  )
}

export default App
