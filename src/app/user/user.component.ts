import { Component, OnInit } from '@angular/core';
import { ServiceService } from './service.service';
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
table:any=[];
  constructor(private serv:ServiceService ) { }

  ngOnInit(): void {
    this.table=this.serv.users;
    console.log(this.table)
}

}
