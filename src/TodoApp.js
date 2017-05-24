import React from 'react';
import TodoHead from './TodoHead';
export  default  class TodoApp extends React.Component {
    render() {
        return (
            <div className="container">
                <div className="panel-default">
                    <div className="panel-heading">
                        <TodoHead/>
                    </div>
                    <div className="panel-body">

                    </div>
                    <div className="panel-footer">

                    </div>
                </div>
            </div>
        )
    }
}