import { useLoaderData } from "react-router-dom";

const Users = () => {

    const   Users = useLoaderData();

    const handleDelete= _id =>{
        console.log("delete", _id);
        fetch(`http://localhost:5000/users/${_id}`,{
            method: "DELETE",
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data)
            if (data.deletedCount>0) {
                alert('deleted successfully')
            }
        })

    }
    
    return (
        <div className="">
           <h2 className="text-5xl flex text-center justify-center"> Users:{Users.length}</h2>
            {
                Users.map(user=> <p key={user._id}>{user.name} : {user.email}  {user._id}<button onClick={()=>handleDelete(user._id)}>X</button></p>)
            }
        </div>
    );
};

export default Users;