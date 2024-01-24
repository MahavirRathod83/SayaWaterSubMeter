import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-get-started',
  templateUrl: './get-started.component.html',
  styleUrls: ['./get-started.component.css'],
})
export class GetStartedComponent {
  FirstName: string = '';
  LastName: string = '';
  Email: string = '';
  isSubmitted: boolean = false;

  onSubmit(registerForm: NgForm) {
    this.isSubmitted = true;
    if (!registerForm.valid) {
      return;
    }
    window.location.href = 'https://saya.life/';
  }
}
