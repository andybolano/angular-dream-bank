
import { Component, OnInit } from '@angular/core';
import { Product, IResult, ITable, Align, Pipe, TypeProducts, StatusProduct, EventClick } from '@bank/shared/interfaces';
import { ServicesService } from '@bank/services/services.service';


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  products: Product[] = [];
  profileId:number = this.service.sessionService.getId();
  titleTable:string = "My Products";
  configTable:ITable []= [
    {
      title: 'Status',
      data: 'status',
      align: Align.CENTER,
      pipe:'status',
      event:EventClick.UPDATE
    },
    {
        title: 'Created At',
        data: 'createdAt',
        pipe:Pipe.DATE
    },
    {
      title: 'Type Product',
      data: 'typeProduct',
    },
    {
        title: 'Cell Phone',
        data: 'cellPhone'
    },
    {
        title: 'Monthly Income',
        data: 'monthlyIncome',
        align: Align.RIGHT,
        pipe:Pipe.CURRENCY
    }
  ];

  constructor(private service: ServicesService) { }

  ngOnInit(): void {
    this.getProducts();
  }

  getProducts(){
    this.service.productService.getProducts(this.profileId,(response:IResult) => {
      if (response.success) {
        this.service.alertService.success('successfully products', 'products successfully completed')
        if(response.content.length > 0) this.setProducts(response.content);
      }
  }, (errorResponse:any) => {
    this.service.alertService.error('Error', errorResponse)
  })
  }

  updateProduct(product:Product,status:StatusProduct){
    product.status = status;
    this.service.productService.updateProduct(this.profileId, product,(response:IResult) => {
      if (response.success) {
        if(response.content.length > 0) this.setProducts(response.content);
      }
    }, (errorResponse:any) => {
        console.log(errorResponse)
    })
  }

  setProducts(products:Product[]){
      products.map((product) =>{
        this.products.push(new Product(
                              product.id,
                              <StatusProduct>product.status,
                              product.createdAt,
                              <TypeProducts>product.typeProduct,
                              product.cellPhone,
                              product.monthlyIncome,
                              product.authenticateId,
                              product.balance
                              ));
      })
  }

  selectElement(e:any) {
    if(e.typeAction == EventClick.UPDATE){
      this.updateProduct(e,this.getNewStatus(e.status));
    }
  }

  getNewStatus(status:StatusProduct):StatusProduct{

    let newStatus:StatusProduct = StatusProduct.WAITING;

    if(status == StatusProduct.WAITING){
          newStatus = StatusProduct.ACTIVE;
    }

    if(status == StatusProduct.ACTIVE){
      newStatus = StatusProduct.INACTIVE;
    }

    if(status == StatusProduct.INACTIVE){
      newStatus = StatusProduct.ACTIVE;
    }

    return newStatus;

  }


}
