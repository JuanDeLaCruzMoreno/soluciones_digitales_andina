import { Component, inject, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { 
  ReactiveFormsModule, 
  FormBuilder, 
  FormGroup, 
  Validators, 
  AbstractControl 
} from '@angular/forms'; 
import { CommonModule } from '@angular/common'; 
import { 
  ContactoService, 
  IContactoPayload, 
  IContactoResponse 
} from '../services/contacto.service';

@Component({
  selector: 'app-contacto',
  standalone: true,
  // CORRECTO: 'imports' es un array
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterLink
  ],
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})
export class ContactoComponent implements OnInit {
  private fb = inject(FormBuilder);
  private contactoService = inject(ContactoService);
  private router = inject(Router);

  contactForm!: FormGroup;
  responseMessage: string = '';
  isSuccess: boolean = false;

  ngOnInit(): void {
    this.contactForm = this.fb.group({
      nombre: ['', [Validators.required, Validators.minLength(3)]],
      correoElectronico: ['', [Validators.required, Validators.email]],
      mensaje: ['', [Validators.required, Validators.minLength(10)]],
    });
  }

  get f(): { [key: string]: AbstractControl } {
    return this.contactForm.controls;
  }

  onSubmit(): void {
    this.responseMessage = '';
    this.isSuccess = false;
    
    if (this.contactForm.invalid) {
      this.contactForm.markAllAsTouched();
      return;
    }

    const payload: IContactoPayload = this.contactForm.value;
    
    this.contactoService.enviarFormulario(payload).subscribe({
      next: (response: IContactoResponse) => {
        this.responseMessage = response.message;
        this.isSuccess = true;
        this.contactForm.reset(); 
        Object.keys(this.contactForm.controls).forEach(key => {
            this.contactForm.get(key)?.setErrors(null);
        });
      },
      error: (err) => {
        // ⚠️ Aquí tenías un error: estabas usando "|" en vez de "||"
        this.responseMessage = err.message || 'Ocurrió un error inesperado al enviar el mensaje.';
        this.isSuccess = false;
      },
    });
  }
}