import { Component } from "@angular/core";


@Component({
    selector:'app-utl', /*es el nombre con el que se referencea el nombre*/
    template:`
    <form>
        <label for="">Nombre:</label>
        <input type="text" value="">
        <button class="btn btn-primary"> Ingresa</button>
    </form>
    `

})

export class utlComponent{
    constructor(){}
}