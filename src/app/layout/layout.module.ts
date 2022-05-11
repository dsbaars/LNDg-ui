import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationComponent } from './navigation/navigation.component';
import { AppRoutingModule } from '../app-routing.module';
import { NgbCollapseModule, NgbNavModule } from '@ng-bootstrap/ng-bootstrap';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
    NavigationComponent
  ],
  imports: [
    AppRoutingModule,
    CommonModule,
    NgbCollapseModule,
    NgbNavModule,
    SharedModule
  ],
  exports: [
    NavigationComponent
  ]
})
export class LayoutModule { }
