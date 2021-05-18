import { Component, OnInit } from '@angular/core'
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {FormValidator} from '@bank/core/validation/validator';
import { IResult, Product, StatusProduct, TypeProducts } from '@bank/shared/interfaces';
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
  typeProducts: Array<Select2OptionData> = [];
  isSave:boolean = false;
  placeholderSelect = "Selected product..."

  constructor(private formBuilder: FormBuilder, private service: ServicesService) { }

  ngOnInit(): void {
    this.typeProducts = [
      {
        id: TypeProducts.CREDIT,
        text: TypeProducts.CREDIT
      },
      {
        id: TypeProducts.CARD,
        text: TypeProducts.CARD
      },
      {
        id: TypeProducts.SAVINGS,
        text:  TypeProducts.SAVINGS
      },
      {
        id: TypeProducts.LEASING,
        text: TypeProducts.LEASING
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

const valueForm = this.productFormGroup.value;
  const product = new Product (0,StatusProduct.WAITING,"",valueForm.name,
                                valueForm.cellPhone,
                                parseFloat(valueForm.monthlyIncome),
                                this.service.sessionService.getId(), parseFloat(valueForm.monthlyIncome));

 this.service.productService.saveProduct(product,(response:IResult) => {
      if (response.success) {
          this.isSave = true;
      }
  }, (errorResponse:any) => {
      console.log(errorResponse)
  })

}

selectElement(e:any):void{
  if(e){
    this.productFormGroup.patchValue({
      name:e
    })
  }
}

}
