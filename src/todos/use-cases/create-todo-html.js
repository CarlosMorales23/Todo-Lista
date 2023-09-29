import { Todo } from "../models/todo.model"

Todo

/**
 * Funcion es crear en html el todo a renderizar
 * @param {Todo} todo 
 */
export const createTodoHTML = (todo) => {
    if( !todo ) throw new Error('A TOD object is required')

    const html = `<h1>${ todo.description } </h1>`

    const liElement = document.createElement('li');
    liElement.innerHTML = html

    return liElement

}