import { Component, OnInit } from '@angular/core'
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {FormValidator} from '@bank/core/validation/validator';
import { IProfile, IProduct, IResult } from '@bank/shared/interfaces';
import { ServicesService } from '@bank/services/services.service';
import { Select2OptionData } from 'ng-select2';
@Component({
  selector: 'app-new-request-product',
  templateUrl: './new-request-product.component.html',
  styleUrls: ['./new-request-product.component.css']
})
export class NewProductRequestComponent implements OnInit {


  productFormGroup: FormGroup = this.formBuilder.group({});

  //podrian venir de un servicio
  products: Array<Select2OptionData> = [];
  isSave:boolean = false;

  constructor(private formBuilder: FormBuilder, private service: ServicesService) { }

  ngOnInit(): void {
    this.products = [
      {
        id: 'Agile credit',
        text: "Agile credit"
      },
      {
        id: 'Credit card',
        text: "Credit card"
      },
      {
        id: 'Savings account',
        text:  "Savings account"
      },
      {
        id: 'Housing lease',
        text: "Housing lease"
      }
    ];

    this.createForm();
  }

  createForm(){
    this.productFormGroup = this.formBuilder.group({

      name: ['', Validators.compose([
        Validators.required
      ])],

      cellPhone: ['', Validators.compose([
        Validators.required,
        FormValidator.validateNumber,
        FormValidator.validateSpace
      ])],

      monthlyIncome: ['', Validators.compose([
        Validators.required,
        FormValidator.validateNumber,
        FormValidator.validateSpace
      ])],

    });
  }

  register(){

    if (!this.productFormGroup.valid) {
      return;
    }


  const product_value:IProduct = this.productFormGroup.value;
  product_value.idProfile = this.service.sessionService.getId();
  product_value.currencyCode = "USD";

    this.service.productService.saveProduct(product_value,(response:IResult) => {
      if (response.success) {
          this.isSave = true;
      }
  }, (errorResponse:any) => {
      console.log(errorResponse)
  })


  }

}
