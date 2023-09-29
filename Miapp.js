
/*
  * 1 index.html

    Es el html raiz, tiene: 
        *body   tiene un   div con un id="app"
            en este div se va adjuntar el html-ccs-js  mediante el ...

    aca se enlaza el main.js

*/

/*
* 2. main.js

    Aca voy a recibir: 
        css , todoStore.js, app.js

    invoco la funcion initStore que me muestra por consola como esta el todos 
    en ese momento

    voy a invocar la función App del app.js pasandole 
    *el argumento id del div del html.index
    Al invocar la funcion App se trae todo el html generado en el app.html
    que mediante la funcion se hizo un innerHtml y 
    un append al elemntId que es ielid del div del html raiz. 

*/

/*

* 3. app.js

    !Su objetivo es la de capturar todo el javaScript y html, y renderizarlo. 

    Importamos todoStore 
    Importamos el html del app.html



    cuando se monta la app, se auto-invoca una función anonima,
    se crea un div, 
    Se mete el html en ese div

    La funcion displayTodos 


*/


/*
*4.
todo.model.js

    *Importaremos el v4 as uuid from uuid, paquete de npm. 

    *Crearemos la class Todo, para poder crear los todos. 

        El constructor recibira como parametro la descripción dada por el usuario. 

            Tendra las propiedades:
                id (dado por la uuid());
                description (dado por el usuario);
                done (inicia en false);
                createdAt (fecha);
*/




/* *5. 
todo.store.js
  
Tendra las funciones que haran posible fabricar los  "todo"; 

**const Filters;   All representa si fue completado o esta pendiente. 

**const state;  es un objeto que tiene:
    *un array con todos los todos  //?Quien alimenta este array
    *la propiedad filter: all que representa todos los filtros. 


**const initStore; 
    *!Muestra por consola el contenido de state. 

**loadStore; 
    aún no implememntada, 

**get todos; 
    *!es un ciclo para determianr mediante el filter que recibe como parametro, el estado de la tarea

    Si el filter es Filter.All, entonces se pasa una copia del array de todos ubicado en el state. 

    Si es Completed; se filtra el array todos, y los que tengan valor done, pueden retornarse.
    
    Si es Pending; se filtra el array todos, y los que tengan valor !done, pueden retornarse.

**addTodo; 
    *!Su función es la de agregar todos. 

    recibe la descripción que el usuario describe. 

    mediante un push manda al array de todos este nuevo todo. 

**toggleTodo;
    *!Su "Funcion es cambiar el estado de completed a no completed y viceversa".

    Recibe el todoId como párametro //?Como envio este parametro

    Mediante el metodo Map, aplicado al array todos,  
    recorremos todo el array,
    efectua la validación del done o !done,
    devuelve el nuevo array con el elemento modificado.


**deleTodo;
    *!Su "Funcion es devolver el array menos el pasado por parametro ".

    Recibe el todoId como párametro //?Como envio este parametro

    Mediante el metodo filter, aplicado al array todos,  
    recorremos todo el array,
    efectua la validación del todoid !== todoId,
    devuelve el array con todos los elementos en que no coindida el id, 
        o dicho de otra forma sin el elemento cuyo id coincide con la condición anterior. 
    

**deleteCompleted; 
    *!Su "Funcion es devolver el array menos el pasado por parametro ".

    Recibe el todoId como párametro //?Como envio este parametro

    Mediante el metodo filter, aplicado al array todos,  
    recorremos todo el array,
    efectua la validación del todo === todo.done,
    devuelve el array con todos los elemtnos que tengan el estado done. 

**setFilter, 
    recibe como parametros un filter, 
    Se pasa ese parametro al state.filter, 
    sino se recibe por parametro el state filtre siempre sea Filters.All

**getCurrentFilter; 
    toma del state.filter su valor y lo retorna. 



    *!Se esportan todas estas funciones para el multiple uso. 

*/