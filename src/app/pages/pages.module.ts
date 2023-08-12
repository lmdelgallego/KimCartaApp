import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PagesRoutingModule } from './pages.routing';
import { UiModule } from '../components/ui/ui.module';

import {MatSidenavModule} from '@angular/material/sidenav';
import { LayoutModule } from '../components/layout/layout.module';


@NgModule({
  declarations: [
    PagesComponent,
    DashboardComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    PagesRoutingModule,
    MatSidenavModule,
    LayoutModule,
    UiModule
  ],
  exports: [
    PagesComponent,
    DashboardComponent,
  ]
})
export class PagesModule { }
