import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FoodComponent } from './food.component';
import { RouterModule, Routes } from '@angular/router';
import { MessageService, ConfirmationService } from 'primeng/api';
import {SharesModule} from '../../shares/shares.module';
import { DialogService } from 'primeng/dynamicdialog';

const routes: Routes = [
  {
    path: '',
    component: FoodComponent,
  },
];

@NgModule({
  declarations: [FoodComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SharesModule,
  ],
  providers: [MessageService, ConfirmationService, DialogService ],
})
export class FoodModule { }