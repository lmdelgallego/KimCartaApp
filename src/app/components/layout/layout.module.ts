import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BaseComponent } from './base/base.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { UiModule } from '../ui/ui.module';



@NgModule({
  declarations: [
    BaseComponent
  ],
  imports: [
    CommonModule,
    MatSidenavModule,
    UiModule
  ],
  exports: [
    BaseComponent
  ]
})
export class LayoutModule { }
