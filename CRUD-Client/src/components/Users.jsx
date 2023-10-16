import { useLoaderData } from "react-router-dom";

const Users = () => {

    const   Users = useLoaderData();
    
    return (
        <div className="">
           <h2 className="text-5xl flex text-center justify-center"> Users:{Users.length}</h2>
            {
                Users.map(user=> <p key={user._id}>{user.name} : {user.email}</p>)
            }
        </div>
    );
};

export default Users;