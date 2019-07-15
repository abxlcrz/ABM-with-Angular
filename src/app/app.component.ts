import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  tituloHeader: string = "Titulo nuevo"

  onClick(event){
    alert("Login desde el parent");
  }
}
