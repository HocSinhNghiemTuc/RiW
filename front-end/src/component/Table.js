import React, {Component} from 'react';

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
    const {characters,removeCharater} = props;
    return (
        <tbody>
        {characters && characters.map((item, index) =>
            <tr key={index}>
                <td>{item.name}</td>
                <td>{item.job}</td>
                <td>
                    <button>Edit</button>
                    <button onClick={()=>removeCharater(index)}>Delete</button>
                </td>
            </tr>)}
        </tbody>
    )
};

class Table extends Component {
    render() {
        const {characters,removeCharater} = this.props;
        return <table>
            <TableHeader/>
            <TableBody characters={characters} removeCharater = {removeCharater}/>
        </table>
    }
}

export default Table;