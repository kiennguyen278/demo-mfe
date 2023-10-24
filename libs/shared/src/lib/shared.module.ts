import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { sharedRoutes } from './lib.routes';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(sharedRoutes),
  ],
})
export class SharedModule {}
