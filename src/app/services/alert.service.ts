import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';


@Injectable({
  providedIn: 'root'
})

export class AlertService {
    constructor(private toastr: ToastrService) { }

    timespan = 3000;
    position = "toast-bottom-center";

    success(title:string, message:string) {
        this.toastr.success(message, title, {
            timeOut: this.timespan,
            progressBar: true,
            progressAnimation: 'decreasing',
            positionClass: this.position,
        });
    }

    error(title:string, message:string) {
        this.toastr.error(message, title, {
            timeOut: this.timespan,
            progressBar: true,
            progressAnimation: 'decreasing',
            positionClass: this.position,
        });
    }

    warning(title:string, message:string) {
        this.toastr.warning(message, title, {
            timeOut: this.timespan,
            progressBar: true,
            progressAnimation: 'decreasing',
            positionClass: this.position,
        });
    }

    info(title:string, message:string) {
        this.toastr.info(message, title, {
            timeOut: this.timespan,
            progressBar: true,
            progressAnimation: 'decreasing',
            positionClass: this.position,
        });
    }
};
