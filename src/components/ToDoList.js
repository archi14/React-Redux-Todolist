import React from 'react';

import { connect } from 'react-redux';
import { add_item, delete_item } from '../actions';

class ToDoList extends React.Component{
    
    state =  { item: "" };
    renderedItem () {
        if(this.props.todolist.length===0)
        {
            return <div>Add item to your your Do list!</div>
        }

        return this.props.todolist.map((item)=>{
            return (
                <div className="item" key={this.props.todolist.indexOf(item)} >
                    <div className="right floated content">
                        <div onClick={()=>this.props.delete_item(item)} className="ui button"> Delete </div>
                    </div>
                    <div className="left floated content"> {item}</div>  
                </div>
            );
        });
    }

    onTextChange=(event)=>{
        this.setState({item:event.target.value});
    }

    onItemAdded=(event)=>{
        if(this.state.item !== '')
        {
            this.props.add_item(this.state.item)
            this.setState({item:""})
        }
        
    }
    render() {  
        
        return (
            <div className="ui center aligned container">
                <div className="ui fluid focus input">
                    <input type='text' 
                    value={this.state.item} 
                    onChange={this.onTextChange} />
                     <div onClick={this.onItemAdded} className="ui button"> Add </div>
                </div>
                
                <div className="ui segment">
                    <div className="ui middle aligned big divided list">{this.renderedItem()} </div>
                </div>
                
            </div>
        );
    }
}
const mapStateToProps = (state) => {
    return {todolist: state.itemList};
}
export default connect(mapStateToProps,{add_item, delete_item})(ToDoList);