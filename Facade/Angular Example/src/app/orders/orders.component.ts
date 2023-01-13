import { Component, OnInit } from '@angular/core';

import { FacadeService } from '../services/factory.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss']
})
export class OrdersComponent implements OnInit {

  private orderList:string[] = []; 
  
  constructor(private facadeService: FacadeService) { }

  ngOnInit() {
    this.orderList = this.facadeService.getOrderList();
    console.log(this.orderList)
  }
}