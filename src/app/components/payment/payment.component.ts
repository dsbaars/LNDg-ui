import { Component, OnInit } from '@angular/core';
import { PaymentService } from './payment.service';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.scss']
})
export class PaymentComponent implements OnInit {
  payments: any[] = [];

  constructor(private payment: PaymentService) { }

  ngOnInit(): void {
    this.payment.get().subscribe((data) => {
      console.log(data);
      for (const c of data.results) {
          this.payments.push(c);
      }
    })
  }

}
