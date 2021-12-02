import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {
   users=[
     {nom:"baha",prenom:"janhaoui"},
     {nom:"imed",prenom:"jadli"},
     {nom:"ahmed",prenom:"tlijani"}
   ]
  constructor() { }
  Getuser() {
    return this.users;
  }

}
