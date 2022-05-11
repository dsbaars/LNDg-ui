import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChannelComponent } from './channel/channel.component';
import { PeerComponent } from './peer/peer.component';
import { PaymentComponent } from './payment/payment.component';
import { InvoiceComponent } from './invoice/invoice.component';
import { RebalancerComponent } from './rebalancer/rebalancer.component';
import { OnChainComponent } from './on-chain/on-chain.component';
import { SettingsComponent } from './settings/settings.component';
import { OverviewComponent } from './overview/overview.component';
import { SharedModule } from '../shared/shared.module';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgbProgressbarModule } from '@ng-bootstrap/ng-bootstrap';



@NgModule({
  declarations: [
    ChannelComponent,
    PeerComponent,
    PaymentComponent,
    InvoiceComponent,
    RebalancerComponent,
    OnChainComponent,
    SettingsComponent,
    OverviewComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    SharedModule,
    CommonModule,
    NgbProgressbarModule
  ]
})
export class ComponentsModule { }
