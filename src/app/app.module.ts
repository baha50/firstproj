import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { HomepageComponent } from './homepage/homepage.component';
<<<<<<< HEAD
import { AboutComponent } from './about/about.component';
=======
import { NavbarComponent } from './navbar/navbar.component';
>>>>>>> 07031ed (add routing)

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    HomepageComponent,
<<<<<<< HEAD
    AboutComponent
=======
    NavbarComponent
>>>>>>> 07031ed (add routing)
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
