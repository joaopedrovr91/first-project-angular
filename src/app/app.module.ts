import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/pages/home/home.component';
import { MomentComponent } from './components/pages/moment/moment.component';
import { AboutComponent } from './components/pages/about/about.component';
import { NewMomentComponent } from './components/pages/new-moment/new-moment.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { MessagesComponent } from './components/messages/messages.component';
import { MomentFormComponent } from './components/moment-form/moment-form.component';
import { EditMomentComponent } from './components/pages/edit-moment/edit-moment.component';
import { LoginComponent } from './components/pages/login/login.component';
import {AuthService} from './auth/services/auth.service';
import {LoginGuard} from './guards/login.guard';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    MomentComponent,
    AboutComponent,
    NewMomentComponent,
    MessagesComponent,
    MomentFormComponent,
    EditMomentComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    FontAwesomeModule,
    ReactiveFormsModule,
  ],
  providers: [AuthService,
    LoginGuard],
  bootstrap: [AppComponent],
})
export class AppModule {}
