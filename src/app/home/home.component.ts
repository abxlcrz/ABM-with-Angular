import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  nombreTitulo: string = 'abm';
  urlParam: any = {mensaje:""};

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
  	this.route.params.subscribe(params =>{
  		if(params){
			this.urlParam = params.mensaje;
  		}  		
  	});
  }

}
