import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { GlobalService } from '../../global.service';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
  AbstractControl,
  ValidationErrors
} from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { ScrollFadeDirective } from '../../shared/scroll-fade.directive';

/**
 * Custom email validator to ensure TLD is present.
 * @param control The form control to validate.
 * @returns Validation error object or null if valid.
 */
export function emailWithTLDValidator(control: AbstractControl): ValidationErrors | null {
  const value = control.value;
  if (!value) return null;

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
  return emailRegex.test(value) ? null : { email: true };
}

@Component({
  selector: 'app-contact',
  imports: [CommonModule, ReactiveFormsModule, ScrollFadeDirective],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {

  global = inject(GlobalService);
  http = inject(HttpClient);

  contactForm: FormGroup;
  submitted = false;
  isCheckboxHovered = false;
  arrowIsHovered = false;
  mailIsHovered = false;
  phoneIsHovered = false;
  mailTest = true;

  contacMeTextEn: string = 
    'I am currently looking for new opportunities in frontend development—' +
    'whether full-time, freelance, or project-based. With a strong focus on clean code, ' +
    'user-centered design, and modern technologies, I aim to create interfaces that are both functional and visually appealing. ' +
    'If you are looking for someone reliable to enhance your digital product, I’d be happy to hear from you.';

  contacMeTextDe: string = 
    'Aktuell bin ich auf der Suche nach neuen Herausforderungen im Bereich Frontend-Entwicklung – sei es in Festanstellung, ' +
    'auf Projektbasis oder freiberuflich. Mein Anspruch ist es, benutzerfreundliche und ansprechende Interfaces mit sauberem Code ' +
    'und modernen Technologien umzusetzen. Wenn Sie jemanden suchen, der Ihr digitales Produkt mitgestalten und weiterentwickeln kann, ' +
    'freue ich mich über Ihre Nachricht.';

  constructor(private fb: FormBuilder) {
    this.contactForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, emailWithTLDValidator]],
      message: ['', Validators.required],
      privacyPolicy: [true, Validators.requiredTrue]
    });
  }

  post = {
    endPoint: 'https://felix-oppermann.com/sendMail.php',
    body: (payload: any) => JSON.stringify(payload),
    options: {
      headers: {
        'Content-Type': 'text/plain',
        responseType: 'text' as const,
      },
    },
  };

  /**
   * Submits the contact form if valid.
   * Sends a POST request with form data to the backend.
   */
  onSubmit() {
    this.submitted = true;

    if (this.contactForm.valid) {
      const formData = this.contactForm.value;
      this.http.post(
        this.post.endPoint,
        this.post.body(formData),
        this.post.options
      ).subscribe({
        next: () => {
          this.contactForm.reset();
          this.submitted = false;
        },
        error: (err) => {
          console.error('Mail send failed:', err);
        }
      });
    }
  }

  /**
   * Checks if the privacy policy checkbox has an error.
   * @returns True if the checkbox is invalid and has been interacted with.
   */
  hasPrivacyError(): boolean {
    const control = this.contactForm.get('privacyPolicy');
    return !!(control?.invalid && (control.touched || this.submitted));
  }

  /**
   * Returns the correct checkbox image based on current state.
   * @returns Path to the image to display.
   */
  getCheckboxImage(): string {
    const isChecked = this.contactForm.get('privacyPolicy')?.value;
    const hasError = this.hasPrivacyError();

    if (isChecked) {
      return '/assets/img/icon-contact/pp-checked.svg';
    } else if (hasError) {
      return '/assets/img/icon-contact/pp-error.svg';
    } else if (this.isCheckboxHovered) {
      return '/assets/img/icon-contact/pp-hover.svg';
    } else {
      return '/assets/img/icon-contact/pp-default.svg';
    }
  }

  /**
   * Returns a dynamic placeholder or error message for a form field.
   * @param field The form control name (e.g., 'email', 'name', 'message').
   * @returns A localized placeholder or error text.
   */
  getDynamicPlaceholder(field: string): string {
    const control = this.contactForm.get(field);
    if (!control) return '';

    const hasError = control.invalid && (control.touched || this.submitted);

    if (hasError) {
      if (field === 'email') {
        return this.global.language === 'en' ? 'Email is required' : 'Bitte E-Mail-Adresse angeben';
      }
      if (field === 'name') {
        return this.global.language === 'en' ? 'Your name is required' : 'Bitte Namen eingeben';
      }
      if (field === 'message') {
        return this.global.language === 'en' ? 'Message is required' : 'Bitte Nachricht eingeben';
      }
    }

    if (field === 'email') {
      return 'Email';
    }
    if (field === 'name') {
      return this.global.language === 'en' ? 'Name' : 'Name';
    }
    if (field === 'message') {
      return this.global.language === 'en' ? 'Message' : 'Nachricht';
    }

    return '';
  }
}
