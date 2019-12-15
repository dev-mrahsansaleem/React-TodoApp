import React from "react";
import Todo from "./components/Todos";
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
        Status: true
      },
      {
        Id: 3,
        Title: "learn react-native",
        Status: false
      }
    ]
  };

  render() {
    return (
      <div className="App">
        <Todo mytodo={this.state.Todo} />
      </div>
    );
  }
}
export default App;
