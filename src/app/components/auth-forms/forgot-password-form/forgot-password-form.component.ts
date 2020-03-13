import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-forgot-password-form',
  templateUrl: './forgot-password-form.component.html',
  styleUrls: ['./forgot-password-form.component.scss']
})
export class ForgotPasswordFormComponent implements OnInit {
  passwordForm: FormGroup;

  constructor(private builder: FormBuilder) {}

  ngOnInit(): void {
    this.passwordForm = this.builder.group({
      mobile: new FormControl('', [Validators.required])
    });
  }

  onSubmit() {}
}
