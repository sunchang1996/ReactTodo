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

    remove= id=>{
        let todos = this.state.todos;
        let index = todos.findIndex(todo=>todo.id===id); // findIndex:查找符合条件的索引 找到返回当前的索引 没有找到返回-1
        todos.splice(index,1);
        this.setState(todos);
    };
    toggleAll =(event)=>{
        let checked = event.target.checked;
        let todos = this.state.todos;
        todos = todos.map(todo=>{todo.completed = checked; return todo});
        this.setState ({todos})
    };
    changeFilterType=(filterType)=>{
        this.setState({filterType});
    };
    clearCompleted=()=>{
        let todos = this.state.todos;
        todos = todos.filter(todo=>!todo.completed);
        this.setState({todos});
    }
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
        })
        let main =(
            <ul className="list-group">
                {
                    todos.length > 0 ? <li className="list-group-item">
                        <input type="checkbox" checked={activeTodoCount === 0}
                               onChange={this.toggleAll}/>{activeTodoCount === 0 ? "取消全选" : '全部选中'}
                    </li> : null
                }
                {
                    showTodos.map((todo,index)=><TodoItem toggle={this.toggle} todo={todo} key={index} remove={this.remove}/>)
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
                        {this.changeFilterType}
                        <TodoFooter activeTodoCount={activeTodoCount}
                                    changeFilterType={this.changeFilterType}
                                    filterType={this.state.filterType}
                                    clearCompleted={this.clearCompleted}
                                    completedTodoCount={completedTodoCount}
                        />
                    </div>
                </div>
            </div>
        )
    }
}