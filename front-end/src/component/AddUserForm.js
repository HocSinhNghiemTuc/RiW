import React,{useState} from 'react';

const AddUserForm = (props) => {
    const initialFormState = { id: null, user: '', password: '' };
    const [user, setUser] = useState(initialFormState);
    const handleInputChange = (event) => {
        const {name,value} = event.target;
        setUser({ ...user, [name]: value });
    };
    return <form onSubmit={(event) => {
        event.preventDefault();
        if (!user.user|| !user.password)
            return;
        props.addUser(user);
        setUser(initialFormState);
    }}>
        <input name = "user" value={user.user} onChange={handleInputChange}/>
        <input name = "password" value={user.password} onChange={handleInputChange}/>
        <button>Add User</button>
    </form>
};
export default AddUserForm;