import React from "react";
import Todoitem from "./Todoitem";
import propTypes from "prop-types";

class Todos extends React.Component {
  render() {
    return this.props.mytodo.map(x => <Todoitem key={x.Id} todo={x} />);
  }
}

//props type
Todos.propTypes = {
  Todos: propTypes.array.isRequired
};
export default Todos;
