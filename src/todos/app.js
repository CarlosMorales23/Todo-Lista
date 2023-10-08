//import { html } from "./app.html";  asi da error, no lo reconoce
import todoStore from "../store/todo.store";
import  html from "./app.html?raw"; //de esta forma lo reconoce en crudo, y no da error
import { renderTodos } from "./use-cases";
//TODO cuando va entre comillas {html}?

const ElementIDs= {
    clearCompletedButton : '.clear-completed',
    TodoList : '.todo-list',
    NewTodoInput: '#new-todo-input',
}

/**
 * 
 * @param {String} elementId 
 */
export const App = (elementId) => {
    const displayTodos = () => {
        const todos = todoStore.getTodos( todoStore.getCurrentFilter() )
        renderTodos( ElementIDs.TodoList, todos )
    }

    //Función auto-invocada
    //Se monta cuando la función App se llama
    (()=>{
        const app = document.createElement('div');
        app.innerHTML = html; //codigo html importado desde app.html
        document.querySelector(elementId).append(app);
        displayTodos();
    })();

    //Referencias HTML
    const newDescriptionInput = document.querySelector( ElementIDs.NewTodoInput );
    const todoListUL = document.querySelector( ElementIDs.TodoList );
    const clearCompletedButton = document.querySelector( ElementIDs.clearCompletedButton );
    

    //Listeners
    newDescriptionInput.addEventListener('keyup', (event) => {
        if ( event.keyCode !== 13 ) return;
        if ( event.target.value.trim().length === 0) return;

        todoStore.addTodo( event.target.value );
        displayTodos();
        event.target.value = ' ';
    })

    todoListUL.addEventListener('click', (event)=>{
        const element = event.target.closest('[data-id]')
        console.log(element.getAttribute('data-id'))
        
        todoStore.toggleTodo(element.getAttribute('data-id'))
        displayTodos();
    })
    
    todoListUL.addEventListener('click', (event)=>{
        console.log(event)
        const isDestroyElement = event.target.className === 'destroy';
        const element = event.target.closest('[data-id]')
        if(!element || !isDestroyElement ) return
        
        todoStore.deleteTodo(element.getAttribute('data-id'))
        displayTodos();
    })

    clearCompletedButton.addEventListener('click', (event)=>{
        todoStore.deleteCompleted();
        displayTodos()
        
    })
}