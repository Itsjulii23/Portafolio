import emailjs, { type EmailJSResponseStatus } from '@emailjs/browser';
import { EmailInterface } from '../interfaces/emailInterface';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact-component',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './contact-component.html',
  styleUrls: ['./contact-component.css']
})
export class ContactComponent {

  contactForm: EmailInterface = {
    name: '',
    email: '',
    phone: '',
    message: ''
  };

  sendEmail(e: Event) {
    e.preventDefault();

    emailjs.sendForm(
      'service_lul812s',
      'template_5go7urr',
      e.target as HTMLFormElement,
      'KonX9fwbcgafDTAoE'
    )
      .then(() => {
        console.log('✅ Enviado!');
        alert('Mensaje enviado con éxito 🎉');
      })
      .catch((error) => {
        console.error('❌ Error...', error);
        alert('Hubo un error al enviar el mensaje.');
      });
  }
}