import React from 'react';
import ReactDom from 'react-dom';
import TodoApp from './TodoApp';
import 'bootstrap/dist/css/bootstrap.css';

import TodoModel from './TodoModel';
let model =new TodoModel();
function render() {
    ReactDom.render(<TodoApp model={model}/>,document.getElementById('root'));
}
model.subscribe(render);
render();