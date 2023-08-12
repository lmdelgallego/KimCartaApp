import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BaseComponent } from './base/base.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { UiModule } from '../ui/ui.module';
import { SectionComponent } from './section/section.component';



@NgModule({
  declarations: [
    BaseComponent,
    SectionComponent
  ],
  imports: [
    CommonModule,
    MatSidenavModule,
    UiModule
  ],
  exports: [
    BaseComponent,
    SectionComponent,
  ]
})
export class LayoutModule { }
