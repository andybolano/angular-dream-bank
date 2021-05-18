import { Pipe,PipeTransform } from '@angular/core';
import { formatDate, formatCurrency} from '@angular/common';
import { DomSanitizer } from '@angular/platform-browser';
import { StatusProduct, StatusTransaction } from '@bank/shared/interfaces'

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

  status(value:StatusProduct):any {
     let status = (value == StatusProduct.ACTIVE) ? `<span class="badge badge-success">${value}</span>` : `<span class="badge badge-danger">${value}</span>`;
    return this.sanitized.bypassSecurityTrustHtml(status);
  }

  statusTransaction(value: StatusTransaction):any{
    let status = (value == StatusTransaction.SUCCESS) ? `<span class="badge badge-success">${value}</span>` : `<span class="badge badge-danger">${value}</span>`;
    return this.sanitized.bypassSecurityTrustHtml(status);
  }



}



