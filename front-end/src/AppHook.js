import React, {useState} from "react";
import TableHook from "./component/TableHook";
import AddUserForm from "./component/AddUserForm";
import EditFormHook from "./component/EditFormHook";

const AppHook = () => {
    const defaultData = [
        {id: 1, user: 'HSNT', password: '123456'},
        {id: 2, user: 'HSNT', password: '123456'},
        {id: 3, user: 'HSNT', password: '123456'},
        {id: 4, user: 'HSNT', password: '123456'}
    ];
    const [userData, setUserData] = useState(defaultData);
    const [editing, setEditing] = useState(false);
    const initialFormState = { id: null, user: '', password: '' };
    const [currentUser, setCurrentUser] = useState(initialFormState);
    const addUser = (user) => {
        user.id = userData.length + 1;
        setUserData([...userData,user]);
    };
    const deleteUser = (id) => {
      setUserData(userData.filter((item) => item.id !== id));
    };
    const editRow = (user) => {
        setEditing(true);
        setCurrentUser({ id: user.id, user: user.user, password: user.password });
    };
    const updateUser = (id,user) => {
      setEditing(false);
      setUserData(userData.map((item)=>(item.id === id ? user: item)));
    };
    return <div>
        { editing ? <EditFormHook editUser={currentUser} updateUser={updateUser}/> : <AddUserForm addUser={addUser} updateUser={updateUser}/>}
        <TableHook userData={userData} deleteUser={deleteUser} editUser={editRow}/>
    </div>
};

export default AppHook;