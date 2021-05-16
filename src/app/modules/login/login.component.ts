import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ServicesService } from '@bank/services/services.service';
import { IResult, ICredential, IProfile } from '@bank/shared/interfaces';
import {FormValidator} from '@bank/core/validation/validator';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

    profile:IProfile = {
        id:-1,
        firtsName:"",
        lastName:"",
        lastLogin:"",
        avatar:"",
      };

    credentials = new FormGroup({
      user: new FormControl(null, Validators.compose([
        Validators.required,
        FormValidator.validateNumber,
        FormValidator.validateSpace
      ])),

      password: new FormControl(null, Validators.compose([
        Validators.required,
        FormValidator.validateLengthPassword,
        FormValidator.validateSpace
      ])),
    });


  constructor(private services: ServicesService) { }

  ngOnInit(): void {
    if (this.services.sessionService.getToken()) this.services.utilitiesService.goTo('/account-summary');
  }

  login() {
        if (!this.credentials.valid) {
            return;
        }


        const credentials_value:ICredential = this.credentials.value;

        this.services.authService.auth(credentials_value, (response:IResult) => {
            if (response.success) {

                const token:string = response.content.accessToken;
                this.profile = response.content;

                this.services.sessionService.setToken(token);
                this.services.sessionService.setSession(this.profile);
                this.services.utilitiesService.goTo('account-summary');
            }

        }, (errorResponse:any) => {
            console.log(errorResponse)
        })
    }

}
