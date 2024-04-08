import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { BasicsPageComponent } from './pages/basics-page/basics-page.component';
import { NumbersPageComponent } from './pages/numbers-page/numbers-page.component';
import { UncommonPageComponent } from './pages/uncommon-page/uncommon-page.component';
import { PrimeNgModule } from '../prime-ng/prime-ng.module';
import { OrderComponent } from './pages/order/order.component';

import { CanFlyPipe } from './pages/pipes/can-fly.pipe';
import { SortByPipe } from './pages/pipes/sort-by.pipe';
import { ToggleCasePipe } from './pages/pipes/toggle-case.pipe';


@NgModule({
  declarations: [
    BasicsPageComponent,
    NumbersPageComponent,
    UncommonPageComponent,
    OrderComponent,
    // Pipes
    CanFlyPipe,
    SortByPipe,
    ToggleCasePipe
  ],
  imports: [
    CommonModule,
    ProductsRoutingModule,
    PrimeNgModule
  ]
})
export class ProductsModule { }
