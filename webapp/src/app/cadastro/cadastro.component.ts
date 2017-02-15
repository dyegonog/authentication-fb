import { Component } from '@angular/core';
import { AngularFire } from 'angularfire2';

@Component({
    selector: 'app-cadastro',
    templateUrl: './cadastro.component.html',
    styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent {
    nome: string;
    email: string;
    senha: string;

    constructor(private _fire: AngularFire) { }

    cadastrar(): void {
        let usuario = new Usuario(this.nome, this.email, this.senha);
        this._fire.database.object('Usuarios').$ref.push(usuario);
    }
}

export class Usuario {
    constructor(public nome, public email, public senha) { }
}