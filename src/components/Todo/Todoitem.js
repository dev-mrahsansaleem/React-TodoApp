import React from "react";
import propTypes from "prop-types";

class Todoitem extends React.Component {
  getStyle = () => {
    return {
      backgroundColor: this.props.todo.Status ? "red" : "green",
      padding: "1%",
      borderBottom: "1px gray dotted",
      textDecoration: this.props.todo.Status ? "line-through" : "none"
    };
  };
  render() {
    return (
      <div className="todoitem" style={this.getStyle()}>
        <h1>
          <input
            type="checkbox"
            onChange={this.props.markComplete.bind(this, this.props.todo.Id)}
          />{" "}
          {this.props.todo.Title}
          <button
            style={btnStyle}
            onClick={this.props.delTodo.bind(this, this.props.todo.Id)}
          >
            x
          </button>
        </h1>
      </div>
    );
  }
}
const btnStyle = {
  backgroundColor: "#ff0000",
  color: "fff",
  border: "none",
  padding: "10px, 10px !important",
  borderRadius: "10px",
  cursor: "pointer",
  float: "right",
  width: "80px",
  height: "20px"
};
// <h3>{this.props.todo.Status ? "completed" : "not completed"}</h3>
// styles variable
/*
const testStyle = {
  padding: "200px"
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
*/
//prop type
Todoitem.propTypes = {
  todo: propTypes.object.isRequired
};
export default Todoitem;
