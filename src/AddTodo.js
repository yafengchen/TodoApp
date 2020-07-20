import React, { Component } from "react"

class AddTodo extends Component {
    state = {
        content: ''
    }

    handleChange = (e) => {
        this.setState({
            content: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        if(this.state.content !== '' && this.state.content.trim() !== ''){
        this.props.addTodo(this.state);
        this.setState({
            content: ''
        })
     }
    }

    render(){
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label>Add new todo:</label>
                    <div>
                        <input type="text" onChange={this.handleChange} value={this.state.content} />
                        <button className="btn blue lighten-1 z-depth-0">Create</button>
                    </div>                    
                </form>
            </div>
        )
    }
}

export default AddTodo