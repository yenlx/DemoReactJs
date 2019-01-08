import React, {
    Component
} from 'react'
import {
    listSub,ViewChildren
} from '../common/index'
export class Subject extends Component {
    constructor(props) {
        super(props);
        this.state = {
            obj: listSub,
            inputSub :''
        }
    }
    handleClick = ()=>{
        if(this.state.inputSub ==='') {
            alert('Input Subject');
            return;
        }
        this.state.obj.push(this.state.inputSub);
        this.setState({
            inputSub : ''
        },()=>console.log('added'));
    }
    handleChange =(e)=>{
        this.setState({
            inputSub : e.target.value 
        });
    }
    remove(index){
        this.state.obj.splice(index,1);
        this.setState({
          inputSub : ''
        },()=>console.log('removed'));
    }
    edit(index){
        let input = this.state.inputSub;
        let arr = this.state.obj;
        arr[index] = input;
        this.setState({
            obj : arr,
            inputSub : ''
        },()=>console.log('updated'));
    }

    render() {
        console.log('render');
        return (
            <div>
                <h1>Input</h1>
                <input 
                    value={this.state.inputSub} 
                    onChange={this.handleChange}>
                </input>
                <button onClick={this.handleClick} >Add sub</button>
                <p></p>
                {this.state.obj.map((x,i)=>
                    <ViewChildren  
                    key={i} 
                    index = {i} 
                    handleRemove={this.remove.bind(this)}
                    handleEdit={this.edit.bind(this)}
                    data = {x}/>
                )}
            </div>
        )
    }
}
export default Subject