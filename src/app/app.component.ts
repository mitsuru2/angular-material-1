import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { UserAccount } from './user-account';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'angular-material-1';
  slide_var?: number;
  clicked_btn?: string;
  hide = true;
  email = new FormControl('', [Validators.required, Validators.email]);
  password = new FormControl('');
  input_email?: string;
  input_password?: string;

  constructor() {}

  ngOnInit(): void {}

  onClick(btn_name: string) {
    this.clicked_btn = btn_name;
    return;
  }

  getErrorMessage() {
    if (this.email.hasError('required')) {
      return 'You must enter a value';
    }

    return this.email.hasError('email') ? 'Not a valid email' : '';
  }

  onSubmit() {
    this.input_email = this.email.value;
    this.input_password = this.password.value;
  }
}
