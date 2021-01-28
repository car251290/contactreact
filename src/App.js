import './App.css';
import React from 'react';
import PeopleList from './components/PeopleList';
import AddPerson from './components/AddPerson';
import DeletePerson from './components/DeletePerson';

const people = [
  {id:1,firstName: "John", lastName: "List", age: 50, phone: "333 4567111",email:"email@gmail.com"},
  {id:2,firstName: "Martha", lastName: "People", age: 22, phone: "333 45667933",email:"email@gmail.com"},
  {id:3, firstName: "Lisa", lastName: "Judthy", age: 45, phone: "333 33446776",email:"email@gmail.com"},
  {id:4,firstName: "Odett", lastName: "Justen", age: 45, phone: "333 4343433345",email:"email@gmail.com"}
];


class App extends React.Component {

  constructor() {
    super();
    this.state = {
      people: people
    }
   //this.deletePerson = this.deletePerson.bind(this);
  }
// add the person this characters
  addPerson(person) {
    const people = this.state.people;

    people.push(person);

    this.setState({
      people: people
    })
  }
  deletePerson(person) {
    const people = this.state.people;
    people.pop(person);
    this.setState({
      people:people
    })
  }

  render() {
    return (
      <div>
        <h1>Address Book</h1>
        <PeopleList people={this.state.people} />
        <AddPerson people={this.state.people} addPerson={this.addPerson.bind(this)} />
        <DeletePerson people={this.state.people} deletePerson={this.deletePerson.bind(this)} />
      </div>
    )
  }
}
export default App