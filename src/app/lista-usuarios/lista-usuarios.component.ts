import { Component, OnInit } from '@angular/core';
import { User } from '../models/User'
import { UsuariosService } from './../usuarios.service';

@Component({
  selector: 'app-lista-usuarios',
  templateUrl: './lista-usuarios.component.html',
  styleUrls: ['./lista-usuarios.component.css'],
  providers: [UsuariosService]
})
export class ListaUsuariosComponent implements OnInit {
  usersData: any;
  mostrarOcultar: boolean = true;
  userSearch: string = "";

  constructor(private usuariosService: UsuariosService) {
     usuariosService.getUsers().subscribe(data=>{
        console.log(data);
        this.usersData = data;
     });
  }

  onMostrarOcultar(){
    this.mostrarOcultar = !this.mostrarOcultar;
  } 

  guardarUsuario(user){
    this.usuariosService.saveUser(user);
    alert('El usuario: ' + user.name + ' ha sido almacenado localmente.');
  }

  buscarUsuario(){
    let user = this.usuariosService.searchUser(this.userSearch);
    debugger;
    if(user){
      alert(`${this.userSearch} se enceuntra en Local Storage`);
    }else{
      alert(`${this.userSearch} NO se enceuntra en Local Storage`);    
    }
  }

  ngOnInit() {
  }

}
