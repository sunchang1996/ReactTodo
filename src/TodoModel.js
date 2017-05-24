export default class TodoModel {
    constructor(){
        // 向 localsStorage 里面写入的时候需要这个key
        this.STORE_KEY = 'todos';
        this.todos = JSON.parse(localStorage.getItem(this.STORE_KEY))||[];// 存放着所有的todos
        //这里可以注册监听器，当模型数据发生变化之后会调用这些监听函数
        this.listeners = [];
    }
    // 订阅 on(type,listener)
    subscribe(listener){
        this.listeners.push(listener);
    }
    emit(){
        this.listeners.forEach(listener =>listener());
    }
    saveAndNotify(todos){
        this.todos = JSON.parse(localStorage.getItem(this.STORE_KEY));
        this.emit();
    }
    // 增加todo
    addTodo=(todo)=>{
        todo = Object.assign(todo,{id:Date.now(),completed:false});
        let todos = this.todos;
        todos.push(todo);
        localStorage.setItem(this.STORE_KEY,JSON.stringify(todos));

    };
    toggle=(id)=>{
        let todos = this.todos;
        todos= todos.map(todo=>{
            if(todo.id === id){
                todo.completed = !todo.completed;
            }
            return todo;
        });
        this.saveAndNotify(todos);
    };

}