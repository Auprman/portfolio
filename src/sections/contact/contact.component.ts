import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { GlobalService } from '../../global.service';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-contact',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})

export class ContactComponent {

  global = inject(GlobalService);
  contactForm: FormGroup;
  submitted: boolean = false;
  isCheckboxHovered: boolean = false;

  constructor(private fb: FormBuilder) {
    this.contactForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      message: ['', Validators.required],
      privacyPolicy:[true, Validators.requiredTrue]
    });
  }

  http = inject(HttpClient)

  

  
  mailTest = true;

  post = {
    endPoint: 'https://deineDomain.de/sendMail.php',
    body: (payload: any) => JSON.stringify(payload),
    options: {
      headers: {
        'Content-Type': 'text/plain',
        responseType: 'text',
      },
    },
  };

  onSubmit() {
    this.submitted = true;
    
    if (this.contactForm.valid) {

      console.log(this.contactForm);
      this.contactForm.reset();
      this.submitted = false;
    }
  }
  
  

  hasPrivacyError(): boolean {
    const control = this.contactForm.get('privacyPolicy');
    return !!(control?.invalid && (control?.touched || this.submitted));
  }
  
  arrowIsHovered:boolean = false;
  mailIsHovered:boolean = false;
  phoneIsHovered: boolean = false;



  contacMeTextEn:string = 'I am currently looking for new opportunities in frontend development—whether full-time, freelance, or project-based.With a strong focus on clean code, user-centered design, and modern technologies, I aim to create interfaces that are both functional and visually appealing.If you are looking for someone reliable to enhance your digital product, I’d be happy to hear from you.'
  contacMeTextDe:string = 'Aktuell bin ich auf der Suche nach neuen Herausforderungen im Bereich Frontend-Entwicklung – sei es in Festanstellung, auf Projektbasis oder freiberuflich.Mein Anspruch ist es, benutzerfreundliche und ansprechende Interfaces mit sauberem Code und modernen Technologien umzusetzen.Wenn Sie jemanden suchen, der Ihr digitales Produkt mitgestalten und weiterentwickeln kann, freue ich mich über Ihre Nachricht.'

}
