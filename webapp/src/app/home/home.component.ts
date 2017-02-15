import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    templateUrl: './home.component.html'
})
export class HomeComponent {
    constructor(private _router: Router) { }

    irParaCompromisso(): void {
        this._router.navigate(['./compromisso']);
    }
} 