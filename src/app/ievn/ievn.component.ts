import { Component } from "@angular/core";

@Component({
    selector:'app-ievn', /*es el nombre con el que se referencea el nombre*/
    template:`
    <form>
        <label for="">Matricula:</label>
        <br>
        <input type="text" value="{{alumno.matricula}}">
        <br>
        <label for="">Nombre:</label>
        <br>
        <input type="text" value="{{alumno.nombre|uppercase}}">
        <br>
        <label for="">Edad:</label>
        <br>
        <input type="text" value="{{alumno.edad}}">
        <br>
        <label for="">Fecha:</label>
        <br>
        <input type="text" value="{{alumno.fechaNacimiento|date}}">
        <br>
        <label for="">Pago:</label>
        <br>
        <input type="text" value="{{alumno.pago|currency}}">
        <br>
        <br>
        <button class="btn btn-primary"> Ingresa</button>
    </form>
    <br>
    `

})

export class ievnComponent{
    constructor(){}
    alumno = {
        matricula: 18002424,
        nombre: 'Roberto Ortiz',
        edad: 24,
        fechaNacimiento: new Date(),
        pago: 2500.00
      };
}