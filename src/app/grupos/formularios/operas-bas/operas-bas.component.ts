import { Component } from '@angular/core';

@Component({
  selector: 'app-operas-bas',
  templateUrl: './operas-bas.component.html',
  styleUrls: ['./operas-bas.component.css']
})
export class OperasBasComponent {
  num1!:string;
  num2!:string;
  resultado!:number;
  operacioSeleccionada:string='Suma';
  tipoOperaciones=[
    'suma',
    'resta',
    'multiplicacio',
    'division'
  ];

  calcular(){
    switch (this.operacioSeleccionada) {
      case 'suma':this.resultado=parseInt(this.num1)+parseInt(this.num2);
      break;
      case 'resta':this.resultado=parseInt(this.num1)-parseInt(this.num2);
      break;
      case 'multiplicacio':this.resultado=parseInt(this.num1)*parseInt(this.num2);
      break;
      case 'division':this.resultado=parseInt(this.num1)/parseInt(this.num2);
      break;
      default:
        break;
    }
  }

}