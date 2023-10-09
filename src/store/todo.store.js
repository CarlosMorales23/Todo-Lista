import { Todo } from "../todos/models/todo.model";

export const Filters = {
    All: 'all',
    Completed: 'Completed',
    Pending: 'Pending',
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
    loadStore();
    console.log('InitStore 🥥')
}

/**
 * Carga el store
 */
const loadStore = () => {
    if( !localStorage.getItem('state') ) return;

    const { todos = [], filter = Filters.All} = JSON.parse( localStorage.getItem('state') )
    state.todos = todos;
    state.filter = filter;
}

const saveStateToLocalStorage = () => {
    localStorage.setItem('state', JSON.stringify(state));
    // localStorage.setItem('sate', 'Hola mundo')
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
    saveStateToLocalStorage()
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

    saveStateToLocalStorage()
}

/**
 * Elimina tareas.
 * @param {String} todoId todo identifier
 */
const deleteTodo = ( todoId ) => {
    state.todos = state.todos.filter( todo => todo.id !== todoId);
    saveStateToLocalStorage()
}

/**
 * Elimina todas las tareas completadas
 * @param {} todoId 
 */
const deleteCompleted = () => {
    state.todos = state.todos.filter( todo => !todo.done);

    saveStateToLocalStorage()
}

/**
 * 
 * @param {Filters} newFilter 
 */
const setFilter = ( newFilter = Filters.All ) => {
    //* TODO se puede validad con object.keys(filters) */

    state.filter = newFilter;

    saveStateToLocalStorage()
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
    saveStateToLocalStorage,
    
}