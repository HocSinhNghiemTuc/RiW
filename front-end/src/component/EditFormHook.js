import React,{useState} from 'react';

const EditFormHook = (props) => {
    const [user,setUser] = useState(props.editUser);
    const handleInputChange = (event) => {
      const {name, value} =  event.target;
      setUser({...user,[name]: value});
    };
    return <form onSubmit={(event) => {
        event.preventDefault();
        props.updateUser(user.id, user)
    }}>
        <input name = "user" value={user.user} onChange={handleInputChange}/>
        <input name = "password" value={user.password} onChange={handleInputChange}/>
        <button>Update</button>
    </form>
};
export default EditFormHook;