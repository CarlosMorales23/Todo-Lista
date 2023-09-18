//import { html } from "./app.html";  asi da error, no lo reconoce
import  html from "./app.html?raw"; //de esta forma lo reconoce en crudo, y no da error
//TODO cuando va entre comillas {html}?


/**
 * 
 * @param {String} elementId 
 */
export const App = (elementId) => {


    //Función auto-invocada
    //Se monta cuando la función App se llama
    (()=>{
        const app = document.createElement('div');
        app.innerHTML = html; //codigo html importado desde app.html
        document.querySelector(elementId).append(app);
    })();

}