import { Component, OnInit  } from '@angular/core';

@Component({
  selector: 'app-slide2',
  templateUrl: './slide2.component.html',
  styleUrls: ['./slide2.component.css']
})
export class Slide2Component implements OnInit {
  nomeComponente = 'slide2'
  texto = 'testando titlecase'
  hoje = new Date()
  constructor() { }

  ngOnInit(): void {
  }

}
