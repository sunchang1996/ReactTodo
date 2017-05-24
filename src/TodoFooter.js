import React from 'react';
import * as filterTypes from './filtertypes'
export  default  class TodoFooter extends React.Component {
    render() {
        return (
            <div className="row">
                <div className="col-xs-3">
                    {
                        this.props.activeTodoCount>0? <a href="#" style={{textDecoration: 'none'}}>
                            你有 <span className="badge">{this.props.activeTodoCount}</span>事项要办
                        </a>:null
                    }

                </div>
                <div className="col-xs-5 text-center">
                    <button
                        className={`btn ${this.props.filterType === filterTypes.ALL ? 'btn-success' : 'btn-default'} btn-sm`}
                        onClick={() => this.props.changeFilterType(filterTypes.ALL)}>全部
                    </button>
                    <button
                        className={`btn ${this.props.filterType === filterTypes.ACTIVE ? 'btn-success' : 'btn-default'} btn-sm`}
                        style={{marginLeft: 10}} onClick={() => this.props.changeFilterType(filterTypes.ACTIVE)}>未完成
                    </button>
                    <button className={`btn ${this.props.filterType === filterTypes.COMPLETED ? 'btn-success' : 'btn-default'} btn-sm`}
                            style={{marginLeft: 10}} onClick={() => this.props.changeFilterType(filterTypes.COMPLETED)}>
                        已完成
                    </button>
                </div>
                <div className="col-xs-4 col-xs-push-2">
                    {
                        this.props.completedTodoCount>0?<button className="btn btn-danger" onClick={this.props.clearCompleted}>删除已完成</button>:null
                    }

                </div>
            </div>
        )
    }
}