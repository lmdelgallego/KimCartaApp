import { Component } from '@angular/core';

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styles: [
    `
      .main-content {
        height: calc(100% - 65px);
        max-width: 1024px;
        margin: 0 auto;
      }

      .content{
        height: 100%;
      }
      .page-content{
        padding: 44px 24px;
      }
    `
  ]
})
export class PagesComponent {
}
