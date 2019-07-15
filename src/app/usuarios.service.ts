import { Injectable } from '@angular/core';
import { UsersData } from './data/users';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  constructor(private http: HttpClient) { }

  getUsers(){
    //return UsersData;
    return this.http.get('https://jsonplaceholder.typicode.com/users');
  }

  saveUser(userData){
    localStorage.setItem(userData.name, JSON.stringify(userData));
  }

  searchUser(user){
  	let respuesta = localStorage.getItem(user);
  	respuesta = JSON.parse(respuesta);
  	return respuesta;
  }
}
