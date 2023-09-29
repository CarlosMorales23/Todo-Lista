//import { html } from "./app.html";  asi da error, no lo reconoce
import todoStore from "../store/todo.store";
import  html from "./app.html?raw"; //de esta forma lo reconoce en crudo, y no da error
//TODO cuando va entre comillas {html}?


/**
 * 
 * @param {String} elementId 
 */
export const App = (elementId) => {

    const displayTodos = () => {
        const todos = todoStore.getTodos( todoStore.getCurrentFilter() )
        console.log( todos )
    }

    //Función auto-invocada
    //Se monta cuando la función App se llama
    (()=>{
        const app = document.createElement('div');
        app.innerHTML = html; //codigo html importado desde app.html
        document.querySelector(elementId).append(app);
        displayTodos();
    })();

}