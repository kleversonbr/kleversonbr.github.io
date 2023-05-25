import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-resposta',
  templateUrl: './resposta.component.html',
  styleUrls: ['./resposta.component.css']
})
export class RespostaComponent implements OnInit {

  @Input() pessoa: any;

  constructor() {
  }

  ngOnInit(): void {
  }

  incrementarComentario(id: number): number{
    return ++this.pessoa[id].curtidas;
  };

}
