import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PagesRoutingModule } from './pages.routing';
import { UiModule } from '../components/ui/ui.module';

import { MatChipsModule } from '@angular/material/chips';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';

import { LayoutModule } from '../components/layout/layout.module';

@NgModule({
  declarations: [PagesComponent, DashboardComponent],
  imports: [
    CommonModule,
    RouterModule,
    PagesRoutingModule,
    MatIconModule,
    MatSidenavModule,
    MatExpansionModule,
    MatTableModule,
    MatChipsModule,
    MatCardModule,
    LayoutModule,
    UiModule,
  ],
  exports: [PagesComponent, DashboardComponent],
})
export class PagesModule {}
