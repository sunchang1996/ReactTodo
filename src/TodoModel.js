export default class TodoModel {
    constructor(){
        // 向 localsStorage 里面写入的时候需要这个key
        this.STORE_KEY = 'todos';
        this.todos = localStorage.getItem(this.STORE_KEY)?JSON.parse(localStorage.getItem(this.STORE_KEY)):[];// 存放着所有的todos
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
        localStorage.setItem(this.STORE_KEY,JSON.stringify(todos));
        this.todos= todos;
        this.emit();
    }
    // 增加todo
    addTodo=(todo)=>{
        todo = Object.assign(todo,{id:Date.now(),completed:false});
        let todos = this.todos;
        todos.push(todo);
        this.saveAndNotify(todos)
    };
    remove= id=>{
        let todos = this.todos;
        let index = todos.findIndex(todo=>todo.id===id); // findIndex:查找符合条件的索引 找到返回当前的索引 没有找到返回-1
        todos.splice(index,1);
       this.saveAndNotify(todos);
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
    toggleAll =(event)=>{
        let checked = event.target.checked;
        let todos = this.todos;
        todos = todos.map(todo=>{todo.completed = checked; return todo});
        this.saveAndNotify(todos);
    };

    clearCompleted=()=>{
        let todos = this.todos;
        todos = todos.filter(todo=>!todo.completed);
        this.saveAndNotify(todos)
    }

}