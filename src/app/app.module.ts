import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminComponent } from './admin/admin.component';
import { NormalUserComponent } from './normal-user/normal-user.component';
import {FormsModule} from '@angular/forms';
import { RouterModule,Routes } from '@angular/router';

const allLinks:Routes = [
  {path:'admin',component: AdminComponent},
  {path:'normal',component:NormalUserComponent},
  
]
@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    NormalUserComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(allLinks),
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
