import React, { Component } from 'react';

class Form extends Component {
  render() {
    return (
      <div class="input-group mb-3">
      <div class="input-group-prepend">
        <span class="input-group-text" id="basic-addon1"></span>
      </div>
      <input type="text" class="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1">
    </input>
    <button type="button" class="btn btn-primary">Search</button>
    </div>
    );
  }
}

export default Form;