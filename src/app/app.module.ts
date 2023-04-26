import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FormLoginComponent } from './components/form-login/form-login.component';
import { MainComponent } from './components/main/main.component';
import { FormRegisterComponent } from './components/form-register/form-register.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FormLoginComponent,
    MainComponent,
    FormRegisterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
