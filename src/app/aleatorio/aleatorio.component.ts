import { Component, EventEmitter, Input, input, Output } from '@angular/core';

@Component({
  selector: 'app-aleatorio',
  imports: [],
  templateUrl: './aleatorio.component.html',
  styleUrl: './aleatorio.component.css'
})
export class AleatorioComponent {
  @Input() min:number = 1;
  @Input() max:number = 10;
  @Output() resultado = new EventEmitter()

  gerar(){
    var valor = Math.floor(Math.random() * (this.max - this.min + 1)) + this.min;
    this.resultado.emit(valor);
  }
}
