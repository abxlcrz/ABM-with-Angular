import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Input()
  titulo: string = 'Angular - Abm';

  @Output()
  loginClick = new EventEmitter();

  constructor() { }

  onClick(event){
    console.log(event);
    alert("Login!");
  }

  onClickParent(event){
    this.loginClick.emit(event);
  }

  ngOnInit() {
  }

}
