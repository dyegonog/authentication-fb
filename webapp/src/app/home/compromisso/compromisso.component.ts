import { Component } from '@angular/core';

@Component({
    templateUrl: './compromisso.component.html'
})
export class CompromissoComponent {
    titulo: string;
    dataDoCompromisso: string = '2017-02-16';
    descricao: string;

    salvar(): void {
        console.log(this.titulo);
        console.log(this.dataDoCompromisso);
        console.log(this.descricao);
    }
}