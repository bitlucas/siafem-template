import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  path: string = 'Consulta Empenho';

  inicio(event){
  	event.preventDefault();
  }
}


