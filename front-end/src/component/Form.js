import React, {Component} from 'react'

class Form extends Component {
    initialState = {
        name: '',
        job: '',
    };
    constructor(props) {
        super(props);
        this.state = this.initialState;
    }

    handleChange = (event) => {
        console.log(event.target);
        const {name, value} = event.target;
        this.setState({
            [name]: value,
        })
    };
    submitForm = () => {
        this.props.handleSubmit(this.state);
        this.setState(this.initialState);
    };

    render() {
        const {name, job} = this.state;
        return <form>
            <label>Name</label><input value={name} name = "name" onChange={this.handleChange}/><br/>
            <label>Job</label><input value={job} name = "job" onChange={this.handleChange}/><br/>
            <input type="button" value="Submit" onClick={this.submitForm} />
        </form>
    }
}

export default Form;