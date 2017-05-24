import React from  'react';

export default class TodoHead extends React.Component{
    render(){
        return(
        <form>
            <div className="form-group">
            <input type="text" className="form-control" placeholder="请输入你要做的事" autoFocus={true}/>
            </div>
        </form>
        )
    }
}