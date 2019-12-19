import React from "react";
import Header from "./components/Layout/Header";
import Todo from "./components/Todo/Todos";
import AddTodo from "./components/Todo/AddTodo";
import "./App.css";

class App extends React.Component {
  state = {
    Todo: [
      {
        Id: 1,
        Title: "learn js",
        Status: false
      },
      {
        Id: 2,
        Title: "learn react js",
        Status: false
      },
      {
        Id: 3,
        Title: "learn react-native",
        Status: false
      }
    ]
  };
  //toggle todo
  markComplete = id => {
    this.setState({
      Todo: this.state.Todo.map(todo => {
        if (todo.Id === id) {
          todo.Status = !todo.Status;
        }
        return todo;
      })
    });
  };
  //delete
  delTodo = id => {
    //console.log(id);
    this.setState({
      todo: [...this.state.Todo.filter(todo => todo.Id !== id)]
    });
    console.log(this.state.Todo);
  };

  AddTodo = title => {
    console.log(title, "from App");
    const newtodo = {
      Id: 4,
      Title: title,
      Status: false
    };
    this.setState({ Todo: [...this.state.Todo, newtodo] });
  };
  render() {
    return (
      <div className="App">
        <div className="container">
          <Header />
          <AddTodo AddTodo={this.AddTodo} />
          <Todo
            mytodo={this.state.Todo}
            markComplete={this.markComplete}
            delTodo={this.delTodo}
          />
        </div>
      </div>
    );
  }
}
export default App;
