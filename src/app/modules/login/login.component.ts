import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ServicesService } from '@bank/services/services.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


     /** Formulario de inicio */
     credentials = new FormGroup({
      email: new FormControl(null, [Validators.required]),
      password: new FormControl(null, Validators.required),
    });

 

  constructor(private services: ServicesService) { }

  ngOnInit(): void {
  }

  login() {
     
    if (!this.credentials.valid) {
        return;
    }


 
    this.services.utilitiesService.goTo('account-summary');

    /*this.animacion_form = true;
    let val_form = this.credentials.value;

    this.services.backendService.postBackend('v1/authenticate', {}, val_form, response => {
        if (response.success) {
            let token = response.content.token.access_token;
            this.services.informacionService.setToken(token);
            setTimeout(() => {
                this.services.utilidadesService.goTo('becoming-earth');
                this.animacion_form = false;
            }, 1000)
        }
    }, responseErr => {
        if (!responseErr.success) this.services.notificacionesService.showAlert('error', responseErr.error.message);
        this.animacion_form = false;
    })*/
}

}
