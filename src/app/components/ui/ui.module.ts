import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { RouterModule } from '@angular/router';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { FilterComponent } from './filter/filter.component';
import { MatChipsModule } from '@angular/material/chips';
import { MatIconModule } from '@angular/material/icon';
import { CardComponent } from './card/card.component';
import { MatCardModule } from '@angular/material/card';


@NgModule({
  declarations: [
    HeaderComponent,
    SidebarComponent,
    FilterComponent,
    CardComponent
  ],
  exports: [
    HeaderComponent,
    SidebarComponent,
    FilterComponent,
    CardComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    MatSidenavModule,
    MatToolbarModule,
    MatChipsModule,
    MatIconModule,
    MatCardModule,
  ]
})
export class UiModule { }
