import React from "react";

export default class Form extends React.Component {
  render() {
    return (
      <>
        <form id="todoForm" onSubmit={this.props.onTodoFormSubmit}>
          <input
            value={this.props.todoNameEnter}
            onChange={this.props.onTodoNameEnterChange}
            type="text"
            placeholder="Type todo"
          ></input>
          <input type="submit"></input>
        </form>
        <button onClick={this.props.toggleDisplayComplete}>
          {this.props.displayComplete ? "Hide" : "Show"}Completed
        </button>
      </>
    );
  }
}
