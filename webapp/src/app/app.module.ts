import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router'
import { AngularFireModule } from 'angularfire2';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import { HomeComponent } from './home/home.component';
import { CompromissoComponent } from './home/compromisso/compromisso.component'

const firebaseConfig = {
    apiKey: "AIzaSyDktrJPuUoNPSAi703DHUjS-dp9qIOCs4o",
    authDomain: "first-firebase-4d33e.firebaseapp.com",
    databaseURL: "https://first-firebase-4d33e.firebaseio.com",
    storageBucket: "first-firebase-4d33e.appspot.com",
    messagingSenderId: "284069989885"
};

const router: Routes = [
    { path: '', redirectTo: '/login', pathMatch: 'full' },
    { path: 'login', component: LoginComponent },
    { path: 'cadastro', component: CadastroComponent },
    { path: 'home', component: HomeComponent },
    { path: 'compromisso', component: CompromissoComponent }
];

@NgModule({
    declarations: [
        AppComponent,
        LoginComponent,
        CadastroComponent,
        HomeComponent,
        CompromissoComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        RouterModule.forRoot(router),
        AngularFireModule.initializeApp(firebaseConfig)
    ],
    providers: [],
    bootstrap: [
        AppComponent
    ]
})
export class AppModule { }
