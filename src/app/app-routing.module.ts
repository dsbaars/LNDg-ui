import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChannelComponent } from './components/channel/channel.component';
import { InvoiceComponent } from './components/invoice/invoice.component';
import { OnChainComponent } from './components/on-chain/on-chain.component';
import { OverviewComponent } from './components/overview/overview.component';
import { PaymentComponent } from './components/payment/payment.component';
import { PeerComponent } from './components/peer/peer.component';
import { RebalancerComponent } from './components/rebalancer/rebalancer.component';
import { SettingsComponent } from './components/settings/settings.component';

const routes: Routes = [
  {
    path: '', component: OverviewComponent,
  },
  {
    path: 'channel', component: ChannelComponent,
  },
  {
    path: 'peer', component: PeerComponent,
  },
  {
    path: 'payment', component: PaymentComponent,
  },
  {
    path: 'invoice', component: InvoiceComponent,
  },
  {
    path: 'rebalancer', component: RebalancerComponent,
  },
  {
    path: 'on-chain', component: OnChainComponent,
  },
  {
    path: 'settings', component: SettingsComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
