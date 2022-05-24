import { Component } from '@angular/core';
import swal from 'sweetalert2'; // Importamos la librería de SweetAlert
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor() {}

  fireAlert() {
    swal.fire({
      html: 'Hola Mundo!',
    });
  }
}
