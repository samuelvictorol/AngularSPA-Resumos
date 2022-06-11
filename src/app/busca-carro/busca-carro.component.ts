import { Component, OnInit } from '@angular/core';
import { Carro } from '../Carro';

@Component({
  selector: 'app-busca-carro',
  templateUrl: './busca-carro.component.html',
  styleUrls: ['./busca-carro.component.css']
})
export class BuscaCarroComponent implements OnInit {
  busca = ''
  resultadoBusca = false
  carroNotFound:boolean = true;
  textoResultado = ''

  carros: Carro[] = [
    { marca: 'Mitsubishi', modelo: 'Lancer', ano: 2016, url:'https://4.bp.blogspot.com/-544cpT-WxHA/VXmebZ6utmI/AAAAAAACJFw/wCLScP2R7GE/s1600/Mitsubishi-Lancer-HLE-2016%2B%25284%2529.jpg' },
    { marca: 'Mitsubishi', modelo: 'Lancer Evolution', ano: 2016, url:'https://3.bp.blogspot.com/-kcSXkTkn6XU/VhKJihYlHsI/AAAAAAABd1k/6jFVCvgwquM/s1600/2016_Lancer_Evolution_FE_20.jpg' },
    { marca: 'Volkswagen', modelo: 'Golf GTI', ano: 2018, url:'https://s2.glbimg.com/Cp6ZIu2IGVcg5EYFO21WP-owk1U=/0x0:620x413/1000x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_cf9d035bf26b4646b105bd958f32089d/internal_photos/bs/2020/7/1/ynB6hWQmixBOUoZkyBsg/2020-08-24-gti-.jpg' }
  ]
  carrosFiltrados: Carro[] = []
  constructor() { }

  ngOnInit(): void {
  }
  buscarCarros(){
    this.carrosFiltrados = [] // AAAAAAAAAAAAAAAAAAAAAAAAAAAA INFERNOOO lima array
    this.textoResultado = ''

    this.carros.forEach((carro: Carro): void => {
      if(this.busca.toUpperCase()  === carro.marca.toUpperCase()){
        this.carroNotFound = false
        this.carrosFiltrados.push(carro)
        this.resultadoBusca = true
        this.textoResultado = this.carrosFiltrados.length + ' resultado(s) de: ' + this.busca
      }
    })
    if(this.carroNotFound != false){
        this.resultadoBusca = true
        this.textoResultado = 'Nenhum Carro foi encontrado'
    }
  }

}
