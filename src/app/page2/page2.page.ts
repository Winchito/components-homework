import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page2',
  templateUrl: './page2.page.html',
  styleUrls: ['./page2.page.scss'],
})
export class Page2Page implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  public alertButtons = ['OK'];

  buttonDisabledCereza: boolean = false;
  buttonDisabledLimon: boolean = false;
  buttonDisabledNaranja: boolean = false;
  toggleValueCereza: boolean = false; 
  toggleValueLimon: boolean = false; 
  toggleValueNaranja: boolean = false; 
  accionAlertaAbiertaCereza: boolean = false;
  accionAlertaAbiertaLimon: boolean = false;
  accionAlertaAbiertaNaranja: boolean = false;
  
  cerrarAlerta(){
    this.accionAlertaAbiertaCereza = false;
    this.accionAlertaAbiertaLimon = false;
    this.accionAlertaAbiertaNaranja = false;
  }

  toggleCereza() {
    if(this.toggleValueCereza == true){
      this.toggleValueCereza = false;
    }else{
    this.toggleValueCereza = true;
    }
    this.activarCereza();
  }

  activarCereza(){
    const cssProperty = document.querySelector<HTMLElement>('.prueba2')!;
    if (this.toggleValueCereza) {
      this.buttonDisabledLimon = true;
      this.buttonDisabledNaranja = true;
      this.accionAlertaAbiertaCereza = true;
      cssProperty.style.setProperty('--ion-background-color', '#D2042D');
      cssProperty.style.setProperty('--color', '#FFFFFF');

    } else {
      this.accionAlertaAbiertaCereza = false;
      this.buttonDisabledLimon = false;
      this.buttonDisabledNaranja = false;
      cssProperty.style.setProperty('--ion-background-color', '#FFFFFF');
      cssProperty.style.setProperty('--color', '#000000');
    }
  }

  toggleLimon() {
    if(this.toggleValueLimon == true){
      this.toggleValueLimon = false;
    }else{
    this.toggleValueLimon = true;
    }
    this.activarLimon();
  }

  activarLimon(){
    const cssProperty = document.querySelector<HTMLElement>('.prueba2');
    if (this.toggleValueLimon) {
      this.buttonDisabledNaranja = true;
      this.buttonDisabledCereza = true;
      this.accionAlertaAbiertaLimon = true;
      cssProperty.style.setProperty('--ion-background-color', '#9ADB02');
    } else {
      this.buttonDisabledNaranja = false;
      this.buttonDisabledCereza = false;
      this.accionAlertaAbiertaLimon = false;
      cssProperty.style.setProperty('--ion-background-color', '#FFFFFF');
    }
  }

  toggleNaranja() {
    if(this.toggleValueNaranja == true){
      this.toggleValueNaranja = false;
    }else{
    this.toggleValueNaranja = true;
    }
    this.activarNaranja();
  }

  activarNaranja(){
    const cssProperty = document.querySelector<HTMLElement>('.prueba2')!;
    if (this.toggleValueNaranja) {
      this.buttonDisabledLimon = true;
      this.buttonDisabledCereza = true;
      this.accionAlertaAbiertaNaranja = true;
      cssProperty.style.setProperty('--ion-background-color', '#FF5733');
    } else {
      this.buttonDisabledLimon = false;
      this.buttonDisabledCereza = false;
      this.accionAlertaAbiertaNaranja = false;
      cssProperty.style.setProperty('--ion-background-color', '#FFFFFF');
    }
  }

}

