import './style.css'
import { App } from './src/todos/app'
import todoStore from "./src/store/todo.store"; // como lo exporte por defecto le puedo colocar el nombre que quiera

todoStore.initStore()

App('#app')  
/*  invocamos la funcion App, que importamos del app.js,  
y le debemos pasar un argumento que denominamos elementId, 
y le pasamos el #app del index, para introducir el h1 que nos devuelve la función.
*/