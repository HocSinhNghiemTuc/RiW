import React, {} from 'react';

const TableHeader = () => {
    return (
        <thead>
        <tr>
            <th>Name</th>
            <th>Job</th>
            <th>Action</th>
        </tr>
        </thead>
    )
};
const TableBody = (props) => {
    return <tbody>
    {props.userData.length > 0 ? props.userData.map((item)=>
        <tr key={item.id}>
            <td>{item.user}</td>
            <td>{item.password}</td>
            <td>
                <button onClick={()=> props.editUser(item)}>Edit</button>
                <button onClick={() => props.deleteUser(item.id)}>Delete</button>
            </td>
        </tr>
    ):<tr>
        <td colSpan={3}>No User</td>
    </tr>}
    </tbody>
};

const TableHook = (props) => {
  return <table>
      <TableHeader/>
      <TableBody userData = {props.userData} deleteUser={props.deleteUser} editUser={props.editUser}/>
  </table>
};
export default TableHook;