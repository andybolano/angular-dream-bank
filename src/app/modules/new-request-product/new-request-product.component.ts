import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {FormValidator} from '@bank/core/validation/validator';
@Component({
  selector: 'app-new-request-product',
  templateUrl: './new-request-product.component.html',
  styleUrls: ['./new-request-product.component.css']
})
export class NewProductRequestComponent implements OnInit {


  productFormGroup: FormGroup = this.formBuilder.group({});


  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.createForm();
  }

  createForm(){
    this.productFormGroup = this.formBuilder.group({

      product: ['', Validators.compose([
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

  }

}
