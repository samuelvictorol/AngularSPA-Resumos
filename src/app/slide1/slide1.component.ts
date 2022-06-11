import { Component, OnInit } from '@angular/core';
import { ClipboardService } from 'ngx-clipboard';

@Component({
  selector: 'app-slide1',
  templateUrl: './slide1.component.html',
  styleUrls: ['./slide1.component.css'],
})
export class Slide1Component implements OnInit {
  nomeComponente = 'slide1';
  imgsInstall = [
    {url:'assets/img/install1.png'},
    {url:'assets/img/install2.png'},
    {url:'assets/img/install3.png'}
  ]
  size = 2;
  font = 'Kdam Thmor Pro';
  color = 'red'; //COR vermelha DO H3
  textoCopiado = '';
  classes = [
    'texto-pink', 'texto-sublinhado'
  ]
  mostra = false

  constructor(private clipboardApi: ClipboardService) {}
  ngOnInit(): void {}

  copiarTexto(btn: number) {
    // O PARAMETRO btn IDENTIFICA QUAL O BOTAO FOI CLICADO PARA FAZER UMA COPIAR O TEXTO RESPECTIVO
    switch (btn) {
      case 1:
        this.textoCopiado = `<div class="container">
        <br>
        <h3 [ngStyle]="{ 'font-size': size + 'rem' , 'font-family' : font , 'color': color }">SETANDO ESSE H3 COMO VERDE E EVENTO CLICK:</h3>
        <hr>
        <button class="h5 offset-1" (click)="copiarTexto(1)">Copiar Codigo</button>
        <img class="col-7 offset-1" src="assets/img/cap1.png"><br><br>
        <button class="h5 offset-1" (click)="copiarTexto(2)">Copiar Codigo</button>
        <img class="col-6 offset-1" src="assets/img/cap1.1.png">
        <br>
        <br>
      </div>
      `
        this.clipboardApi.copyFromContent(this.textoCopiado)
        alert('Copiado para área de transferência')
        break;
      case 2:
        this.textoCopiado = `export class Slide1Component implements OnInit {
          nomeComponente = 'slide1';
          size = 2;
          font = 'Kdam Thmor Pro';
          color = '#33ff00'; //COR VERDE DO H3
          textoCopiado = '';
          constructor(private clipboardApi: ClipboardService) {}
          ngOnInit(): void {}
        }`
        this.clipboardApi.copyFromContent(this.textoCopiado)
        alert('Copiado para área de transferência')
        break;
        case 3:
          this.textoCopiado = `copiarTexto(btn: number) {
            // O PARAMETRO btn IDENTIFICA QUAL O BOTAO FOI CLICADO PARA FAZER UMA COPIAR O TEXTO RESPECTIVO
            switch (btn) {
              case 1:
                this.textoCopiado = "Texto botao 1" //  aqui usa-se aspas simples ou crase
                this.clipboardApi.copyFromContent(this.textoCopiado)
                alert('Copiado para área de transferência')
                break;
              case 2:
                this.textoCopiado = "Texto botao 2" // aqui usa-se aspas simples ou crase
                this.clipboardApi.copyFromContent(this.textoCopiado)
                alert('Copiado para área de transferência')
                break;
            }
          }`
          this.clipboardApi.copyFromContent(this.textoCopiado)
          alert('Copiado para área de transferência')
          break;
    }
  }

  mostraParag(){
    this.mostra = !this.mostra
  }
}


