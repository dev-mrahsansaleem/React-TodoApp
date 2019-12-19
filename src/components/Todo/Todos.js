import React from "react";
import Todoitem from "./Todoitem";
import propTypes from "prop-types";

class Todos extends React.Component {
  render() {
    return this.props.mytodo.map(x => (
      <Todoitem
        key={x.Id}
        todo={x}
        markComplete={this.props.markComplete}
        delTodo={this.props.delTodo}
      />
    ));
  }
}

//props type
Todos.propTypes = {
  mytodo: propTypes.array.isRequired
};
export default Todos;
