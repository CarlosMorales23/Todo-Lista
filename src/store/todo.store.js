import { Todo } from "../todos/models/todo.model";

const Filter = {
    All: 'all',
    Completed: 'Completed',
    Pending: 'Pending'
}

const state = {

    todos : [
        new Todo('Piedra del alma'),
        new Todo('Piedra del infinito'),
        new Todo('Piedra del tiempo'),
    ],

    filter : 'all'

}



const initStore = ()=>{
    console.log(state)
    console.log('InitStore 🥥')
}

/**
 * Carga el store
 */
const loadStore = () => {
    throw new Error('Not implemented')

}

/**
 * Agrega tareas a la lista.
 * @param {String} description 
 */
const addTodo = ( description ) => {
    throw new Error('Not implemented')

}

/**
 * Cambia tarea a Done, realizadas. 
 * @param {String} todoId todo identifier
 */
const toggleTodo = ( todoId ) => {
    throw new Error('Not implemented')
}

/**
 * Elimina tareas.
 * @param {String} todoId todo identifier
 */
const deleteTodo = ( todoId ) => {
    throw new Error('Not implemented')
}

/**
 * Elimina todas las tareas completadas
 * @param {} todoId 
 */
const deleteCompleted = ( todoId ) => {
    throw new Error('Not implemented')
}


const setFilter = ( newFilter = Filter.All ) => {
    throw new Error('Not implemented')
}

const getCurrentFilter = (  ) => {
    throw new Error('Not implemented')
}


export default {
    addTodo,
    deleteCompleted,
    deleteTodo,
    getCurrentFilter,
    initStore,
    loadStore,
    setFilter,
    toggleTodo,
    
}