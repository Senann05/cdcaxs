import React, { Component } from "react";

class Wine extends Component {
  render() {
    const { title, description, rating } = this.props;
    return (
      <div>
        <h1>{title}</h1>
        <h5>{description}</h5>
        <p>{rating}</p>
      </div>
    ); 
  }
}

export default Wine;