import { Pessoa } from './filtro/filtro.component';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ProvaSocial-app';

  pessoa: Pessoa[] = [];
  div: any = '';
  codigo: any = '';

  aoAdicionar(pessoa: Pessoa) {
    //console.log(`Adicionado: ` + pessoa);

    this.pessoa.push(pessoa);
  }
  
  copiarCodigo(){
    this.div = document.getElementById('codigo');
    var tempTextArea = document.createElement('textarea');

    tempTextArea.value = this.div.innerHTML;
    document.body.appendChild(tempTextArea);
    tempTextArea.select();
    document.execCommand('copy');
    document.body.removeChild(tempTextArea);
    console.log('Código copiado!');

    this.colarTexto();
  }

  async colarTexto(){
    this.div = document.getElementById('texto');

    //this.div.value = navigator.clipboard.readText();
    const response = await navigator.clipboard.readText();
    this.div.value = response;


    console.log('Código Colado!');
    //teste
    alert("Código copiado para a área de transferência!")

  }

}
