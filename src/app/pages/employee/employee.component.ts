import { Component, OnInit } from '@angular/core';
import { order } from '@models/order.interface';
import { OrdersService } from '@services/orders/orders.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss'],
})
export class EmployeeComponent implements OnInit {
  public tables: order[] = [
    {
      order: 0,
      table: 0,
      status: '',
      items: [
        {
          name: '',
          price: 0,
          quantity: 0,
        },
      ],
    },
  ];
  public selectedOrder!: order;
  constructor(private orderServices: OrdersService) {}

  ngOnInit(): void {
    this.orderServices.getOrders().subscribe((res) => {
      console.log(res);
      this.tables = res;
    });
  }
}
