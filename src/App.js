import React, { Component } from 'react';
import './App.css';
import Search from './component/Search';
import ListToDo from './component/ListToDo';

class App extends Component {

  constructor(props) {
    super(props); 
    this.state = {
      todoList: [],
      item: ''
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleToDoStatus = this.handleToDoStatus.bind(this);
  }

  
  handleChange(event) {
    this.setState({item: event.target.value});
  }

  handleSubmit(event) {
    // alert("Submitted Name " + this.state.item);
    const itemObj = {
      item: this.state.item,
      completed: false,
      itemID: this.state.todoList.length
    };
    this.setState({
      todoList: [...this.state.todoList, itemObj],
      item: ''
    });
    event.preventDefault();
  }

  handleToDoStatus (event) {
    const position = event.target.id;
    let newtodoList = [...this.state.todoList];
    // alert("check Name " , this.state.item);
    // let itemObj = this.state.todoList[position];
    // alert(itemObj);
    newtodoList[position].completed = !newtodoList[position].completed;
    // const newToDoList = 
    this.setState({
        todoList: newtodoList
    })
  }

  render() {
    return (
      <div className="well" >
        <header className="App-intro">
          {/* <img src={logo} className="App-logo" alt="logo" /> */}
          <h1 className="App-title">TODO LIST</h1>
        </header>
        <p className="App-intro">
          {/* To get started, edit <code>src/App.js</code> and save to reload. */}
        </p>

        <Search 
          item={this.state.item}
          handleChange={this.handleChange}
          onSubmit={this.handleSubmit}
        />
        <ListToDo 
          todoList={this.state.todoList}
          onChange={this.handleToDoStatus}
        />
      </div>
    );
  }
}

export default App;
