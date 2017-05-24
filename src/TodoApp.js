import React from 'react';
import TodoHead from './TodoHead';
import TodoItem from  './TodoItem';
export  default  class TodoApp extends React.Component {
    constructor(props){
        super(props); // 父类的构造函数
        this.state={todos:[
            {id:Math.random(),title:'今天学习react',completed:false},//初始化默认状态
            {id:Math.random(),title:'今天学习vue',completed:true}
        ]}

    }
    toggle=(id)=>{
        let todos = this.state.todos;
        todos.map(todo=>{
            if(todo.id === id){
                todo.completed = !todo.completed;
            }
            return todo;
        });
        this.setState({todos});
    };
    addTodo=(todo)=>{
        todo = Object.assign(todo,{id:Date.now(),completed:false});
        // todo.id= Date.now();
        let todos = this.state.todos;
        todos.push(todo);
        this.setState({todo})
    };
    remove= id=>{
        let todos = this.state.todos;
        let index = todos.findIndex(todo=>todo.id===id); // findIndex:查找符合条件的索引 找到返回当前的索引 没有找到返回-1
        todos.splice(index,1);
        this.setState(todos);
    }
    render() {
        let main =(
            <ul className="list-group">
                {
                    this.state.todos.map((todo,index)=><TodoItem toggle={this.toggle} todo={todo} key={index} remove={this.remove}/>)
                }
             </ul>
        )
        return (
            <div className="container" style={{marginTop:30}}>
                <div className="panel-default">
                    <div className="panel-heading">
                        <TodoHead addTodo={this.addTodo}/>
                    </div>
                    <div className="panel-body">
                        {main}
                    </div>
                    <div className="panel-footer">

                    </div>
                </div>
            </div>
        )
    }
}