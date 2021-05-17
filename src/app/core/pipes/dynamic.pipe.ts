import { Pipe,PipeTransform } from '@angular/core';
import { formatDate, formatCurrency} from '@angular/common';
import { DomSanitizer } from '@angular/platform-browser';


@Pipe({
name: 'dynamicPipe'
})
export class DynamicPipe implements PipeTransform {

 constructor(private sanitized: DomSanitizer) {}

  transform(value:string, modifier:string) {
    if (!modifier) return value;
    return eval('this.' + modifier + '(\'' + value + '\')')
  }

  currency(value:string):string {
    return formatCurrency(parseFloat(value),"en_US",'$','USD');
  }

  date(value:string):string {
    return formatDate(value,"short", "en_US")
  }

  status(value:string):any {
    let status = (value == 'true') ? '<span class="badge badge-success"> Activo </span>' : '<span class="badge badge-danger">Inactivo </span>';
    return this.sanitized.bypassSecurityTrustHtml(status);
  }



}



