import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { HttpService } from 'src/app/services/http/http.service';
import { constants } from 'src/app/core/config/constants';
import { ApiResponse } from 'src/app/core/types/ApiResponse';

@Component({
  selector: 'app-request-vendor-form',
  templateUrl: './request-vendor-form.component.html',
  styleUrls: ['./request-vendor-form.component.scss']
})
export class RequestVendorFormComponent implements OnInit {
  form: FormGroup;
  msg: string;
  isError = false;

  constructor(private builder: FormBuilder, private http: HttpService) {}

  ngOnInit(): void {
    this.form = this.builder.group({
      name: new FormControl('', [Validators.required]),
      managerName: new FormControl('', [Validators.required]),
      managerEmail: new FormControl('', [Validators.required]),
      managerNationalId: new FormControl('', [Validators.required]),
      managerMobile: new FormControl('', [Validators.required])
    });
  }

  async onSubmit() {
    this.isError = false;
    const data = {
      name: this.form.get('name').value,
      managerName: this.form.get('managerName').value,
      managerEmail: this.form.get('managerEmail').value,
      managerMobile: this.form.get('managerMobile').value,
      managerNationalId: this.form.get('managerNationalId').value
    };
    const res: ApiResponse = (await this.http
      .sendPostRequest(constants.vendor.add, data)
      .toPromise()) as ApiResponse;
    if (res.isSuccess) {
      this.form.reset();
    } else {
      this.isError = true;
    }
    this.msg = res.message;
  }
}
