import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  nombre: string = '';
  apellido: string = '';
  cedula: number | null = null;
  correo: string = '';
  telefono: number | null = null;
  password: string = '';

  messages1: any[] = [];

  submitForm() {
    if (this.nombre.length < 5) {
      this.messages1 = [
        {
          severity: 'error',
          summary: 'Error',
          detail: 'El nombre debe tener al menos 5 letras.',
        },
      ];
      return;
    }
    if (this.apellido.length < 7) {
      this.messages1 = [
        {
          severity: 'error',
          summary: 'Error',
          detail: 'El apellido debe tener al menos 10 letras.',
        },
      ];
      return;
    }

    if (this.correo.indexOf('@') === -1) {
      this.messages1 = [
        {
          severity: 'error',
          summary: 'Error',
          detail: 'El correo debe contener el símbolo @.',
        },
      ];

      return;
    }

    if (
      !this.nombre ||
      !this.apellido ||
      !this.cedula ||
      !this.correo ||
      !this.telefono ||
      !this.password
    ) {
      this.messages1 = [
        {
          severity: 'error',
          summary: 'Error',
          detail:
            'No se pudo enviar el formulario. Por favor, llena todos los campos.',
        },
      ];
      return;
    }

 
    if (this.cedula.toString().length !== 10) {
      this.messages1 = [
        {
          severity: 'error',
          summary: 'Error',
          detail: 'El teléfono debe tener exactamente 10 números.',
        },
      ];
      return;
    }

    if (this.password !== '12345') {
      this.messages1 = [
        {
          severity: 'error',
          summary: 'Error',
          detail: 'Contraseña incorrecta. Inténtalo de nuevo.',
        },
      ];
      return;
    }

    console.log('Nombre:', this.nombre);
    console.log('Apellido:', this.apellido);
    console.log('Cedula:', this.cedula);
    console.log('Correo:', this.correo);
    console.log('Telefono:', this.telefono);
    console.log('Contraseña:', this.password);
    console.log('Formulario enviado');

    this.nombre = '';
    this.apellido = '';
    this.cedula = null;
    this.correo = '';
    this.telefono = null;
    this.password = '';

    this.messages1 = [
      {
        severity: 'success',
        summary: 'Éxito',
        detail: 'Formulario enviado con éxito.',
      },
    ];
  }


}
