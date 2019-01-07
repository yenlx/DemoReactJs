import React, { Component } from 'react'

export class ViewChildren extends Component {
  removeNote=()=>{
    let { index, handleRemove } = this.props;
    handleRemove(index);
  }
  editNote=()=>{
    let { index, handleEdit } = this.props;
    handleEdit(index);
  }
  render() {
   
    return (
      <div>
          <p>{this.props.data}</p>
          <button onClick={this.removeNote}>DELETE</button>  
          <button onClick={this.editNote}>EDIT</button>
      </div>
    )
  }
}
