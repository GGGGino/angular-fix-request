import { Component } from '@angular/core';
import { RestangularModule, Restangular } from 'ngx-restangular';
import { environment } from '../environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'Cedac';
  apiUrl = environment.apiUrl;
  isStandalone = window.isStandalone;

  constructor(private restangular: Restangular) {}
}
