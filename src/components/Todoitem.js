import React from "react";
import propTypes from "prop-types";

class Todoitem extends React.Component {
  render() {
    console.log(this.props.todo);
    return (
      <div
        className="todoitem"
        style={Object.assign(
          {},
          testStyle,
          this.props.todo.Status ? CompletedStyle : notCompletedStyle
        )}
      >
        <h1>{this.props.todo.Title}</h1>
        <h3>{this.props.todo.Status ? "completed" : "not completed"}</h3>
      </div>
    );
  }
}

// styles variable
const testStyle = {
  padding: "20px"
};
const notCompletedStyle = {
  backgroundColor: "#ff0000",
  color: "#ffffff"
};
const CompletedStyle = {
  backgroundColor: "green",
  color: "#e8e8e8",
  textDecoration: "line-through"
};
//prop type
Todoitem.propTypes = {
  todo: propTypes.object.isRequired
};
export default Todoitem;
