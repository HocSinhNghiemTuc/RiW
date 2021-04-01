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
            ]
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
            characters: [...this.state.characters,character]
        })
    };
    render() {
        const {characters} = this.state;
        return <div>
            <div>
                <Table characters = {characters} removeCharater = {this.removeCharacter}/>
            </div>
            <div>
                <Form handleSubmit = {this.handleSubmit}/>
            </div>
        </div>
    }
}
export default App;