import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { WebsiteService } from 'src/app/services/website.service';
import { CryptographicService } from 'src/app/services/cryptographic.service';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-get-started',
  templateUrl: './get-started.component.html',
  styleUrls: ['./get-started.component.css'],
})
export class GetStartedComponent {
  FirstName: string = '';
  Message: string = '';
  Email: string = '';
  isSubmitted: boolean = false;

  constructor(
    private websiteService: WebsiteService,
    private toastr: ToastrService,
    private _dycrypt: CryptographicService,
    private toaster: ToastrService
  ) {}

  onSubmit(registerForm: NgForm) {
    this.isSubmitted = true;
    if (!registerForm.valid) {
      return;
    }
    const MainPage = {
      name: registerForm.value.name,
      email: registerForm.value.email,
      message: registerForm.value.message,
    };
    this.websiteService.UpdateMenuBarContactUsData(MainPage).subscribe(
      (response: any) => {
        var result = this._dycrypt.decrypt(response);
        this.toaster.success(
          'Thanks for contacting us. Will get back to you soon'
        );
        setTimeout(() => {
          window.location.reload();
        }, 10);
      },
      (err: any) => {
        if (err.status == '400') {
          this.toastr.error('Email already Exist.');
        } else {
          this.toastr.error('Something went wrong. Please try after sometime.');
          setTimeout(() => {
            location.reload();
          }, 10);
        }
      }
    );
  }
}
