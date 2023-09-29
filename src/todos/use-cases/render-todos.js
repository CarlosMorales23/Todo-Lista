import { Todo } from "../models/todo.model";
import { createTodoHTML } from "./create-todo-html";



/**
 * 
 * @param {String} elementId Elemento del html donde se renderizara
 * @param {Todo} todos Los todos a renderizar
 */
export const renderTodos= ( elementId, todos=[] )=>{

    //TODO referencia

    const element = document.querySelector( elementId );

    todos.forEach( todo => {
        element.append( createTodoHTML(todo) )

        
        
    });

}