import { Todo } from "../todos/models/todo.model";

const Filters = {
    All: 'all',
    Completed: 'Completed',
    Pending: 'Pending'
}

const state = {
    todos : [
        new Todo('Piedra del alma'),
        new Todo('Piedra del infinito'),
        new Todo('Piedra del tiempo'),
        new Todo('Piedra del poder'),
        new Todo('Piedra de la realidad'),
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
    throw new Error(' Not implemented')

}


const getTodos = (filter= Filters.All ) => {

    switch ( filter ) {
        case Filters.All:
            return[...state.todos];
        
        case Filters.Completed:
            return state.todos.filter( todo => todo.done )
        
        case Filters.Pending:
            return state.todos.filter( todo => !todo.done)

        default:
            throw new Error(`Option ${ filter } is not valid`);
    }
}

/**
 * Agrega tareas a la lista.
 * @param {String} description 
 */
const addTodo = ( description ) => {
    if (!description) throw new Error('description is required')

    state.todos.push(new Todo(description))
}

/**
 * Cambia tarea a Done, realizadas. 
 * @param {String} todoId todo identifier
 */
const toggleTodo = ( todoId ) => {
    state.todos = state.todos.map(todo => {
        if(todo.id === todoId){
            todo.done = !todo.done; /*Basicamente cambie de true a false y viceversa, por la negación con el simbolo !*/
        }
        return todo; /* retorno un nuevo todo*/
    })
}

/**
 * Elimina tareas.
 * @param {String} todoId todo identifier
 */
const deleteTodo = ( todoId ) => {

    state.todos = state.todos.filter( todo => todo.id !== todoId);
}

/**
 * Elimina todas las tareas completadas
 * @param {} todoId 
 */
const deleteCompleted = () => {
    state.todos = state.todos.filter( todo => todo.done);
}

/**
 * 
 * @param {Filters} newFilter 
 */
const setFilter = ( newFilter = Filters.All ) => {
    //* TODO se puede validad con object.keys(filters) */

    state.filter = newFilter;
}

const getCurrentFilter = (  ) => {
    return state.filter;
}

export default {
    addTodo,
    deleteCompleted,
    deleteTodo,
    getCurrentFilter,
    getTodos,
    initStore,
    loadStore,
    setFilter,
    toggleTodo,
    
}