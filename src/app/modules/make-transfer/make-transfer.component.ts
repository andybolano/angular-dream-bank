import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { ServicesService } from '@bank/services/services.service';
import { FormValidator } from '@bank/core/validation/validator';
import { Select2OptionData } from 'ng-select2';
import { IResult, StatusProduct, Account, Transaction, StatusTransaction } from '@bank/shared/interfaces';

@Component({
  selector: 'app-make-transfer',
  templateUrl: './make-transfer.component.html',
  styleUrls: ['./make-transfer.component.css']
})
export class MakeTransferComponent implements OnInit {


  isSave:boolean = false;
  transactionFormGroup: FormGroup = this.formBuilder.group({});
  accountsData: Array<Select2OptionData> = [];
  authenticateId =  this.service.sessionService.getId();
  placeholderSelect:string = "Select account...";
  accounts:Account[] = [];
  constructor(private formBuilder: FormBuilder, private service: ServicesService) { }

  ngOnInit(): void {
    this.createForm();
    this.getAccounts();
  }

  createForm(){
    this.transactionFormGroup = this.formBuilder.group({
      productId: ['', Validators.compose([
        Validators.required
      ])],
      commerce: ['', Validators.compose([
        Validators.required,
        FormValidator.validateText,
      ])],
      value: ['', Validators.compose([
        Validators.required,
        FormValidator.validateNumber,
        FormValidator.validateSpace
      ])]


    });
  }

  getAccounts(){
    this.service.productService.getProductsByStatus(this.authenticateId, StatusProduct.ACTIVE,(response:IResult) => {
        if (response.success) {
          if(response.content.length > 0){
            this.setAccounts(response.content);
            this.accounts = response.content;
          }
        }
    }, (errorResponse:any) => {
        console.log(errorResponse)
    })
  }

  setAccounts(accounts:Account[]):void{
    let accountsData:any[] = [];
      accounts.forEach(element => {
        accountsData.push({id:element.id?.toString() || "",text: element.typeProduct+' - '+element.accountName})
      });

      this.accountsData = accountsData;

  }

  selectElement(e:any):void{
    if(e){
      this.transactionFormGroup.patchValue({
        productId:e
      })
    }
  }


  register():void{
    if (!this.transactionFormGroup.valid) {
      return;
    }

    const account:any = this.accounts.find(item => item.id === this.transactionFormGroup.value.productId);
    if(!account){
      return;
    }

    const valueForm = this.transactionFormGroup.value;
    const transaction = new Transaction(0, valueForm.productId, "",parseFloat(valueForm.value), parseFloat(account.balance),valueForm.commerce,StatusTransaction.SUCCESS)
    this.service.transactionService.saveTransaction(this.authenticateId,transaction,(response:IResult) => {
      if (response.success) {
          this.isSave = true;
      }
  }, (errorResponse:any) => {
      console.log(errorResponse)
  })

  }


}
