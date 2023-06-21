import { Component } from '@angular/core';
import { IAlumnosIric } from '../alumnos-iric';

@Component({
  selector: 'app-iric',
  templateUrl: './iric.component.html',
  styleUrls: ['./iric.component.css']
})
export class IricComponent {

  imageWidth:number=120;
  imageMargin: number=5;
  muestraImg:boolean=true;
  listFilter:string=''
  showImage():void{
    this.muestraImg=!this.muestraImg;
  }

  alumnosIric: IAlumnosIric[] = [
    {
      matricula: 18002424,
      nombre: 'Roberto Ortiz',
      edad: 24,
      correo: "18002424@alumnos.utleon.edu.mx",
      imagen: 'https://scontent.fbjx1-1.fna.fbcdn.net/v/t39.30808-6/349643035_236886892303469_2257674385968668735_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeHg-LQ4Q5bbmXlpQU0kJSc2lP-JmdER1fGU_4mZ0RHV8Uc65YctZsnatYf4nn2DgPTOCbn2_3KQE0RxWfvjmzHl&_nc_ohc=FgLIDN7n2sQAX8bgkOc&_nc_ht=scontent.fbjx1-1.fna&oh=00_AfCNb73gq66RJVDkns_NLQHfs8x-3r7BycCEjmcldolydg&oe=648EC978'
    },
    {
      matricula: 20001207,
      nombre: 'Lissa Ortiz',
      edad: 16,
      correo: "20001207@alumnos.cbtis.edu.mx",
      imagen: 'https://scontent.fbjx1-1.fna.fbcdn.net/v/t39.30808-6/309246671_1305198703349440_1493810434533172086_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=174925&_nc_eui2=AeHiSFvto6nDehmA8IJEDbY5fGUsKOc-Pwd8ZSwo5z4_B4gw63QtfwxBkNStS_5ObrFke0O2lJ3fPHBuo3C1PoJF&_nc_ohc=_719TcZFpaQAX8WDsqP&_nc_ht=scontent.fbjx1-1.fna&oh=00_AfCH_Ukj3mUDOoj6gajLDFDtzMYvQ0YKg9tQ81c2mF6o4A&oe=648F77B0'
    },
    {
      matricula: 20002449,
      nombre: 'Noe Guevara',
      edad: 21,
      correo: "20002449@alumnos.utleon.edu.mx",
      imagen:'https://scontent.fbjx1-1.fna.fbcdn.net/v/t1.6435-9/124265049_1110229529412155_9009709155060414875_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=174925&_nc_eui2=AeF5n_gQvVoc6NwWgMb0wAYe-14JqIHIarH7XgmogchqsT7T9uttvfswCRjJzKOS-4uSn51qaJ8_PqVXLfPH1poL&_nc_ohc=vmnB4kVXKQUAX-ItZ4o&_nc_ht=scontent.fbjx1-1.fna&oh=00_AfC_uzphb1EMN8AOBQKY_OTXtnM8Ukl1knXybuAwbzVZ8w&oe=64B1CB4C'
    }
  ]


}
