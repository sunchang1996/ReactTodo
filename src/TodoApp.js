import React from 'react';
import TodoHead from './TodoHead';
import TodoItem from  './TodoItem';
import TodoFooter from  './TodoFooter';
import * as filterTypes from './filtertypes';// 把里面的方法拿出来 给filterTypes 作为它的参数
export  default  class TodoApp extends React.Component {
    constructor(props){
        super(props); // 父类的构造函数
        this.state={
            filterType:filterTypes.ALL
        }
    }
    changeFilterType=(filterType)=>{
        this.setState({filterType});
    };
    render() {
        let todos = this.props.model.todos;
        let activeTodoCount = todos.reduce((count,todo)=>count+(todo.completed?0:1),0);
        let completedTodoCount = todos.length-activeTodoCount;
        let showTodos = todos.filter((todo)=>{
            switch (this.state.filterType){
                case filterTypes.ACTIVE: // 显示未完成的
                    return !todo.completed;
                case filterTypes.COMPLETED: // 显示完成的
                    return todo.completed;
                default:
                    return true ;
            }
        });
        let main =(
            <ul className="list-group">
                {
                    todos.length > 0 ? <li className="list-group-item">
                        <input type="checkbox" checked={activeTodoCount === 0}
                               onChange={this.props.model.toggleAll}/>{activeTodoCount === 0 ? "取消全选" : '全部选中'}
                    </li> : null
                }
                {
                    showTodos.map((todo,index)=><TodoItem toggle={this.props.model.toggle} todo={todo} key={index} remove={this.props.model.remove}/>)
                }
             </ul>
        )
        return (
            <div className="container" style={{marginTop:30}}>
                <div className="panel-default">
                    <div className="panel-heading">
                        <TodoHead addTodo={this.props.model.addTodo}/>
                    </div>
                    <div className="panel-body">
                        {main}
                    </div>
                    <div className="panel-footer" >
                        <TodoFooter activeTodoCount={activeTodoCount}
                                    changeFilterType={this.changeFilterType}
                                    filterType={this.state.filterType}
                                    clearCompleted={this.props.model.clearCompleted}
                                    completedTodoCount={completedTodoCount}
                        />
                    </div>
                </div>
            </div>
        )
    }
}