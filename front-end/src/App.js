import React, {Component} from "react";
import Table from "./component/Table";
import Form from "./component/Form";

class App extends Component{
    constructor(props) {
        super(props);
        this.state = {
            characters: [
                {
                    name: 'Charlie',
                    job: 'Janitor',
                },
                {
                    name: 'Mac',
                    job: 'Bouncer',
                },
                {
                    name: 'Dee',
                    job: 'Aspring actress',
                },
                {
                    name: 'Dennis',
                    job: 'Bartender',
                }
            ],
            edit: {
                name: '',
                job: ''
            }
        }
    }
    removeCharacter = (index)=>{
        this.setState({
            characters: this.state.characters.filter((item,i)=>{
                return index !== i
            })
        })
    };
    handleSubmit = (character) => {
        this.setState({
            characters: [...this.state.characters,character],
            edit: this.state.edit
        })
    };
    // editCharacter = (character) => {
    //     this.setState({
    //         characters: [
    //             this.state.characters.slice(0,this.state.index_edit),
    //             character,
    //             this.state.characters.slice(this.state.index_edit+1)
    //         ],
    //         edit: {
    //             name: '',
    //             job: ''
    //         }
    //     })
    // };
    // edit = (index) => {
    //     this.setState({
    //         characters:  this.state.characters,
    //         edit: this.state.characters[index],
    //         index_edit: index
    //     })
    // };

    render() {
        const {characters} = this.state;
        return <div>
            <div>
                <Table characters = {characters} removeCharater = {this.removeCharacter} editCharacter = {this.edit}/>
            </div>
            <div>
                <Form handleSubmit = {this.handleSubmit}/>
            </div>
        </div>
    }
}
export default App;