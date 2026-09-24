import { Component, computed, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  imports: [FormsModule],
  selector: 'app-formulaire-regex',
  styleUrl: './formulaire-regex.css',
  templateUrl: './formulaire-regex.html',
})
export class FormulaireRegex {
  UserEmail = signal<string>('');
  UserPassword = signal<string>('');
  UserPhoneNumber = signal<string>('');

  onSubmit(): void {
    console.log('form submited');
  }
  isEmailValid = computed(()=>
     /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(this.UserEmail()))
  

  passwordChecks = computed(() => {
    const p = this.UserPassword();
    return {
      length: p.length >= 8,
      lowercase: /[a-z]/.test(p),
      uppercase: /[A-Z]/.test(p),
      digit: /\d/.test(p),
      special: /[@$!%?&]/.test(p),
    };
  });

  isPasswordValid = computed(() => {
    return Object.values(this.passwordChecks()).every((v) => v);
  });

  isPhoneNumberValid = computed (()=>
    /^(?:(?:\+|00)33|0)[1-9](?:[\s.-]?\d{2}){4}$/.test(this.UserPhoneNumber())
	)

  isFormValid(): boolean {
    return (
      this.isEmailValid() &&
      this.isPasswordValid() &&
      this.isPhoneNumberValid()
    );
  }

  passwordStrength = computed(() => {
    const checks = Object.values(this.passwordChecks());
    const value = (checks.filter((v) => v).length / checks.length) * 100;

    let label: string;
    let progressClass: string;
    let textClass: string;

    if (value < 40) {
      label = 'Faible';
      progressClass = 'progress-error';
      textClass = 'text-error';
    } else if (value < 80) {
      label = 'Moyen';
      progressClass = 'progress-warning';
      textClass = 'text-warning';
    } else if (value < 100) {
      label = 'Bon';
      progressClass = 'progress-info';
      textClass = 'text-info';
    } else {
      label = 'Excellent';
      progressClass = 'progress-success';
      textClass = 'text-success';
    }

    return { value, label, progressClass, textClass };
  });
}
