
import './App.css'

function App() {

  const handleAddUser=(event) => {
    event.preventDefault();
    const form=event.target;
    const name=form.name.value;
    const email=form.email.value;
    const user={name,email};
    console.log(user);

    fetch('http://localhost:5000/users',{
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(user)
    })
    .then((response) => response.json())
    .then(data=>{
      console.log(data);
      if (data.insertedId) {
        alert("Added Succesfully!");
        form.reset();
      }
    })
  };

  return (
    <>

      <body className="bg-gray-100 p-4">
    <div className="max-w-md mx-auto bg-white p-8 rounded-lg shadow-lg">
        <h1 className="text-2xl font-semibold mb-4">Simple Curd</h1>
        <form onSubmit={handleAddUser} action="" method="" className="space-y-4">
            <div>
                <label htmlFor="name" className="block text-gray-700">Name</label>
                <input type="text" id="name" name="name" className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring focus:border-blue-500" required/>
            </div>
            <div>
                <label htmlFor="email" className="block text-gray-700">Email</label>
                <input type="email" id="email" name="email" className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring focus:border-blue-500" required/>
            </div>
            <div>
                <button type="submit" className="w-full bg-blue-500 text-white rounded-md py-2">Submit</button>
            </div>
        </form>
    </div>
</body>
     
    </>
  )
}

export default App
