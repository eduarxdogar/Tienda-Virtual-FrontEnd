import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-registro-usuarios',
  templateUrl: './registro-usuarios.component.html',
  styleUrls: ['./registro-usuarios.component.css'],
  standalone: true,
  imports: [ReactiveFormsModule] // Importa aquí el ReactiveFormsModule si es un componente standalone
})
export class RegistroUsuariosComponent {
  registroForm: FormGroup;

  constructor(private fb: FormBuilder, private http: HttpClient) {
    this.registroForm = this.fb.group({
      nombre: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
    });
  }

  registrarUsuario() {
    if (this.registroForm.valid) {
      const usuario = this.registroForm.value;
      this.http.post('https://tu-backend.com/api/usuarios', usuario).subscribe(response => {
        console.log('Usuario registrado:', response);
      }, error => {
        console.error('Error al registrar:', error);
      });
    }
  }
}
