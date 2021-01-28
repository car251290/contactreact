import React from 'react';

class DeletePerson extends React.Component {
    deleteTodo(person) {
        this.setState((prevState) => ({
            todos: prevState.todos.filter(item => item.person !== person),
        }))
    };
    
    render() {
        return (
          <li>
            <input type="checkbox" checked={ this.props.isCompleted } onChange={ this.props.toggleComplete } />
            <button onClick={() => this.props.deletePerson(this.props.person)}>Delete</button>
            <span>{ this.props.description }</span>
          </li>
        );
      }
    

}

export default DeletePerson;