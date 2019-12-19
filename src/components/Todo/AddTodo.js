import React from "react";

class AddTodo extends React.Component {
  state = {
    title: ""
  };
  onchangetitle = e => {
    this.setState({ [e.target.name]: e.target.value });
    console.log(this.state.title);
  };
  onsubmittitle = e => {
    e.preventDefault();
    this.props.AddTodo(this.state.title);
    this.setState({ title: " " });
    console.log(this.state.title);
  };
  render() {
    return (
      <form
        onSubmit={this.onsubmittitle}
        style={{ display: "flex", margin: "10px auto" }}
      >
        <tr>
          <td>
            <input
              type="text"
              name="title"
              style={{ flex: "10", padding: "5px" }}
              placeholder="add to do..."
              onChange={this.onchangetitle}
              value={this.state.title}
            ></input>
          </td>
          <td>
            <input
              type="submit"
              value="submit"
              className="btn"
              style={{ flex: "1" }}
            ></input>
          </td>
        </tr>
      </form>
    );
  }
}

export default AddTodo;
