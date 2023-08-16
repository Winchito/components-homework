import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Home', url: '/home', icon: 'home' },
    { title: 'Configurar Colores', url: '/page2', icon: 'paper-plane' },
    { title: 'Condiciones', url: '/alerta', icon: 'alert' },
    { title: 'Camara', url: '/camara', icon: 'camera' },
    { title: 'Segmentos', url: '/segmento', icon: 'list' },
    { title: 'Calendario', url: '/calendario', icon: 'calendar' },
  ];

  titleName = this.appPages.map(page => page.title)

  public results = [...this.titleName];

  handleInput(event:any) {
    const query = event.target.value.toLowerCase();
    this.results = this.titleName.filter((d) => d.toLowerCase().indexOf(query) > -1);
  }

  constructor() {}
}
