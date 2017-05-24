import React from 'react';
export  default  class TodoFooter extends React.Component{
    render(){
        return(
            <div className="row">
                <div className="col-xs-4">
                    <a href="#" style={{textDecoration:'none'}}>
                        你有 <span className="badge">{this.props.activeTodoCount}</span>事项要办
                    </a>
                </div>
                <div className="col-xs-4">

                </div>
                <div className="col-xs-4">

                </div>
            </div>
        )
    }
}