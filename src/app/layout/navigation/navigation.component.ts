import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {
  public isMenuCollapsed = false;

  links = [
    { title: `Overview`, route: '' },
    { title: `Channels`, route: 'channel' },
   // { title: `Peers`, route: 'peer' },
    { title: `Payments`, route: 'payment' },
    //{ title: `Invoices`, route: 'invoice' },
    { title: `Rebalancer`, route: 'rebalancer' },
    //{ title: `On-chain`, route: 'on-chain' },
    { title: `Settings`, route: 'settings' }
  ];

  constructor(
    private router: Router,
    public route: ActivatedRoute,
  ) { }

  ngOnInit(): void {
  }

}
