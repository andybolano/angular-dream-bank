
import { Component, OnInit } from '@angular/core';
import { IProduct, IResult, ITable } from '@bank/shared/interfaces';
import { ServicesService } from '@bank/services/services.service';


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  products: IProduct[] = [];
  titleTable:string = "My Products";
  configTable:ITable []= [
    {
      title: 'Status',
      data: 'status',
      align:'center',
      pipe:'status'
    },
    {
        title: 'Created At',
        data: 'createdAt',
        pipe:'date'
    },
    {
      title: 'Name',
      data: 'name',
    },
    {
        title: 'Cell Phone',
        data: 'cellPhone'
    },
    {
        title: 'Currency Code',
        data: 'currencyCode',
        align:'right'
    },
    {
        title: 'Monthly Income',
        data: 'monthlyIncome',
        align:'right',
        pipe:'currency'
    }
  ];



  constructor(private service: ServicesService) { }

  ngOnInit(): void {
    this.getProducts();
  }

  getProducts(){

    this.service.productService.getProducts(this.service.sessionService.getId(),(response:IResult) => {
      if (response.success) {
        this.products = response.content;
      }
  }, (errorResponse:any) => {
      console.log(errorResponse)
  })
  }


}
