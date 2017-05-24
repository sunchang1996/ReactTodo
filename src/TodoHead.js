import React from  'react';
const ENTRY_KEY = 13;
export default class TodoHead extends React.Component{

    handleKeyDown=(e)=>{
       if(e.keyCode === ENTRY_KEY&&e.target.value.length>0){
           let title= e.target.value;
           this.props.addTodo({title});
           e.target.value='';
       }
    };
    render(){
        return(

            <div className="form-group">
            <input type="text" className="form-control" onKeyUp={this.handleKeyDown} placeholder="请输入你要做的事" autoFocus={true} />
            </div>

        )
    }
}