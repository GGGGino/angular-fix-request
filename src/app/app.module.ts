import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RestangularModule, Restangular } from 'ngx-restangular';
import { NgxUiLoaderModule, NgxUiLoaderConfig, SPINNER, POSITION, PB_DIRECTION } from 'ngx-ui-loader';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';

import { environment } from '../environments/environment';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { JwtInterceptor, ErrorInterceptor } from './_helpers';
import { HomepageComponent } from './homepage/homepage.component';
import { LoginpageComponent } from './loginpage/loginpage.component';
import { FormpageComponent } from './formpage/formpage.component';
import { OperationModule } from './operation/operation.module';
import { NatureModule } from './nature/nature.module';
import { NotifyModule } from './notify/notify.module';
import { PriorityModule } from './priority/priority.module';
import { OperationstatusModule } from './operationstatus/operationstatus.module';
import { AssignationstatusModule } from './assignationstatus/assignationstatus.module';
import { QuoteModule } from './quote/quote.module';
import { AccidentstatusModule } from './accidentstatus/accidentstatus.module';
import { AccidentpriorityModule } from './accidentpriority/accidentpriority.module';
import { AccidentModule } from './accident/accident.module';

declare global {
  interface Window { ajaxURL: any; portletId: any; isStandalone: boolean; }
}

window.ajaxURL = window.ajaxURL || {};
window.portletId = window.portletId || {};
window.isStandalone = window.isStandalone || false;


// Function for setting the default restangular configuration
export function RestangularConfigFactory(RestangularProvider) {
  if ( window.isStandalone ) {
    RestangularProvider.setBaseUrl(environment.apiUrl + "/api");
  } else {
    RestangularProvider.setBaseUrl(window.ajaxURL + "/api");
  }
  RestangularProvider.setDefaultHeaders({'X-Liferay-Portlet-Id': window.portletId, 'Authorization': 'Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX25hbWUiOiIzNzAwMDAwNVxcbWFzdGVyIiwibmFtZSI6Ik1hc3RlciIsImVtYWlsIjoiZWxlbmluYS5zdGVmYW5pbmlAZ21haWwuY29tIiwiYWJpX2NvZGUiOiIwMDA4NCIsImNvbnRyYWN0X2NvZGUiOiIzNzAwMDAwNSIsImF1dGhvcml0aWVzIjpbIlJPTEVfVVNFUiIsIlJPTEVfU1lTQURNSU4iLCJST0xFX0FETUlOIl19.D6xEHnAO0eKaIx4_cIbLOjg5uvbHZo8dr0Prr1v-pWvmDb3ypEVzAXt2SG0iIfsXaLYA3SOJdCZwUI9wWqCtaw0pMydcCZZnKWR4mh3WUn6v8NzbB3w89oh6xUEOYKc53lPMvrhBH6eFvFKiUjsc_iuBRnHZez5uzhi8PRuQYNPC1c8rSwzK93zGNVPGtqN5lBqLfofmDZZFy_MriIGBs_KHDsFjhUY1ON-6CxXQet50doIBNDeUQUcTBMeNpJxREuYAExzjJUraoE240-IOpZglPXA3nfiSCGPEQ4OQPtDZzRYySTKOsTWV8mkQs_RhiRR0-ssHdHmnpOONZT8AfA'});
  // RestangularProvider.setDefaultHeaders({'Authorization': 'Bearer UDXPx-Xko0w4BRKajozCVy20X11MRZs1'});
}

const ngxUiLoaderConfig: NgxUiLoaderConfig = {
  bgsOpacity: 0,
  bgsPosition: POSITION.bottomCenter,
  bgsSize: 40,
  bgsType: SPINNER.rectangleBounce,
  pbDirection: PB_DIRECTION.leftToRight, // progress bar direction
  pbThickness: 5, // progress bar thickness
} as NgxUiLoaderConfig;

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    LoginpageComponent,
    FormpageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    NgbModule,
    RestangularModule.forRoot(RestangularConfigFactory),
    NgxUiLoaderModule.forRoot(ngxUiLoaderConfig),
    MatTableModule,
    MatPaginatorModule,
    MatMenuModule,
    BrowserAnimationsModule,
    OperationModule,
    NatureModule,
    NotifyModule,
    PriorityModule,
    OperationstatusModule,
    AssignationstatusModule,
    QuoteModule,
    AccidentstatusModule,
    AccidentpriorityModule,
    AccidentModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
