import { v4 as uuid } from "uuid";
/*uuid es un paquete de identificador unico que brinda npm,  
  acá estoy usando la versión 4. 
*/

export class Todo {

    /**
     * 
     * @param {String} description 
     */
    constructor (description){
        this.id= uuid();
        this.description = description;
        this.done = false;
        this.createdAt = new Date();
    }

    

}




