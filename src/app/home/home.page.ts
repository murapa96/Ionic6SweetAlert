import { Component } from '@angular/core';
import swal from 'sweetalert2'; // Importamos la librería de SweetAlert
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor() {}

  fireAlert() {
    swal.fire({
      html: 'Hola Mundo!',
    });
  }

}
