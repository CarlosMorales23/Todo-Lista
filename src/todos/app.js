//import { html } from "./app.html";  asi da error, no lo reconoce
import todoStore from "../store/todo.store";
import  html from "./app.html?raw"; //de esta forma lo reconoce en crudo, y no da error
import { renderTodos } from "./use-cases";
//TODO cuando va entre comillas {html}?

const ElementIDs= {
    TodoList : '.todo-list',
    NewTodoInput: 'new-todo-input'

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

    //Listeners
    newDescriptionInput.addEventListener('keyup', (event) => {
        console.log(event);
        console.log( event.target.value )

        if (event.KeyCode != 13) return
    })

}