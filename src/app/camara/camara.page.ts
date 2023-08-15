import { Component } from '@angular/core';
import { PhotoService } from '../services/photo.service';

@Component({
  selector: 'app-camara',
  templateUrl: './camara.page.html',
  styleUrls: ['./camara.page.scss'],
})
export class CamaraPage {

  constructor(public photoService: PhotoService) { }

  addPhotoToGallery() {
    this.photoService.addNewToGallery();
  }

}


