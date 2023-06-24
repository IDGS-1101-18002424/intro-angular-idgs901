import { Component } from '@angular/core';
import { IAlumnosIric } from '../alumnos-iric';

@Component({
  selector: 'app-iric',
  templateUrl: './iric.component.html',
  styleUrls: ['./iric.component.css']
})
export class IricComponent {

  imageWidth: number = 120;
  imageMargin: number = 5;
  muestraImg: boolean = true;
  listFilter: string = ''
  showImage(): void {
    this.muestraImg = !this.muestraImg;
  }
  alumnoTitle!: string;

  alumnosIric: IAlumnosIric[] = [
    {
      matricula: 18002424,
      nombre: 'Roberto Ortiz',
      edad: 24,
      correo: "18002424@alumnos.utleon.edu.mx",
      imagen: 'https://scontent.fbjx1-1.fna.fbcdn.net/v/t39.30808-6/353468004_6494681847259327_6728068725689690589_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeHxEp3OZazNaEh588rjXOuSE3O2Ir9qMg8Tc7Yiv2oyDwqgT1dE4teFTJe_UnhFWNmZvmgaX1cDCZ4tKGKVYqpN&_nc_ohc=QUQpBKE1v0kAX_Rq6vj&_nc_ht=scontent.fbjx1-1.fna&oh=00_AfBTWt0nP-3mh7JwXNtV5EpeJ-BCubAvOMXtT5zDTFYTiQ&oe=649C45E8',
      calif: 4.8
    },
    {
      matricula: 20001207,
      nombre: 'Lissa Ortiz',
      edad: 16,
      correo: "20001207@alumnos.cbtis.edu.mx",
      imagen: 'https://scontent.fbjx1-1.fna.fbcdn.net/v/t39.30808-6/324293767_862588504792498_4680729084465744767_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=8bfeb9&_nc_eui2=AeElI5iL0GOaLDy8mMVsHDopj5i9BAVkJTSPmL0EBWQlNJ2UmVmu8LLRDiPR0jB0k-OoDsU3gxr8oN7yeHsFF0Ee&_nc_ohc=1Lty_0akTmAAX8YN9x6&_nc_ht=scontent.fbjx1-1.fna&oh=00_AfCi2q__nAZLAdXl3fDUqrF-BNyFESdgzp2UXbyWoSV9Tw&oe=649BBC18',
      calif: 6.7
    },
    {
      matricula: 20002449,
      nombre: 'Noe Guevara',
      edad: 21,
      correo: "20002449@alumnos.utleon.edu.mx",
      imagen: 'https://scontent.fbjx1-1.fna.fbcdn.net/v/t1.6435-9/124265049_1110229529412155_9009709155060414875_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=174925&_nc_eui2=AeF5n_gQvVoc6NwWgMb0wAYe-14JqIHIarH7XgmogchqsT7T9uttvfswCRjJzKOS-4uSn51qaJ8_PqVXLfPH1poL&_nc_ohc=vmnB4kVXKQUAX-ItZ4o&_nc_ht=scontent.fbjx1-1.fna&oh=00_AfC_uzphb1EMN8AOBQKY_OTXtnM8Ukl1knXybuAwbzVZ8w&oe=64B1CB4C',
      calif: 5.9
    }
  ]

  onCalificaClick(message:string){
    this.alumnoTitle=`Alumnos ${message}`
  }

}
