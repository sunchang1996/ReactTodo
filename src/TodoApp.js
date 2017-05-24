import React from 'react';
import TodoHead from './TodoHead';
import TodoItem from  './TodoItem';
export  default  class TodoApp extends React.Component {
    constructor(props){
        super(props); // 父类的构造函数
        this.state={todos:[
            {id:Date.now(),title:'今天学习react',completed:false},//初始化默认状态
            {id:Date.now(),title:'今天学习vue',completed:false}
        ]}

    }
    render() {
        let main =(
            <ul className="list-group">
                {
                    this.state.todos.map((todo,index)=><TodoItem todo={todo} key={index}/>)
                }

            </ul>
        )
        return (
            <div className="container" style={{marginTop:30}}>
                <div className="panel-default">
                    <div className="panel-heading">
                        <TodoHead/>
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