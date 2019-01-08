import React, { Component } from 'react'
let mang = ['a','b','c'];
export default class Demo extends Component {
    constructor(props){
        super(props);
        this.state={
            val : mang ,
            isShow : false
        }
    }
    handleChange=()=>{
        let v = this.state.val;
        v[2] = 'm';
        console.log(v);
        this.setState({
            isShow : !this.state.isShow
        });
        this.setState((prevState)=>{
            return {isShow : !prevState.isShow}
        })
        console.log(this.state.val);
    }
    
  render() {
      console.log('rendered');
    return (
      <div>
        {this.state.val.map(x=> x)}
        <br></br>
        {this.state.isShow ? 'true' : 'false' }
        {console.log(this.state.val)}
        <p></p>
        <button onClick={this.handleChange} >Click</button>
      </div>
    )
  }
}
