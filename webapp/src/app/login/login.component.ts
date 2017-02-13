import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent {
    constructor(private _router: Router) { }

    campoEmail: string;
    campoSenha: string;

    autenticar(): void {
        this._router.navigate(['/home']);
    }
}