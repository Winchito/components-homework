import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-segmento',
  templateUrl: './segmento.page.html',
  styleUrls: ['./segmento.page.scss'],
})
export class SegmentoPage implements OnInit {

  segment = 'second';

  constructor() { }

  ngOnInit() {
  }

}
