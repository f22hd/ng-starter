import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-request-vendor-form',
  templateUrl: './request-vendor-form.component.html',
  styleUrls: ['./request-vendor-form.component.scss']
})
export class RequestVendorFormComponent implements OnInit {
  form: FormGroup;

  constructor(private builder: FormBuilder) {}

  ngOnInit(): void {
    this.form = this.builder.group({
      submit: new FormControl('', [Validators.required])
    });
  }

  onSubmit() {}
}
