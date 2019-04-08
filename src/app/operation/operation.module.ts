import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RestangularModule, Restangular } from 'ngx-restangular';
import { NgxUiLoaderModule, NgxUiLoaderConfig, SPINNER, POSITION, PB_DIRECTION } from 'ngx-ui-loader';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';

import { MatNativeDateModule, MatSortModule } from '@angular/material';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatChipsModule } from '@angular/material/chips';
import { MatButtonModule } from '@angular/material/button';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatSelectModule } from '@angular/material';

import { NgbAccordionModule, NgbPopoverModule, NgbDatepickerModule, NgbTimepickerModule, NgbRatingModule } from '@ng-bootstrap/ng-bootstrap';

import { OperationRoutingModule } from './operation-routing.module';
import { OperationpageComponent } from './operationpage/operationpage.component';
import { OperationspageComponent } from './operationspage/operationspage.component';
import { OperationcreatepageComponent } from './operationcreatepage/operationcreatepage.component';
import { OperationeditpageComponent } from './operationeditpage/operationeditpage.component';
import { JwtInterceptor } from '../_helpers';
import { environment } from '../../environments/environment';
import { OperationFormComponent } from './operation-form/operation-form.component';

import { DateTimePickerComponent } from './date-time-picker/date-time-picker.component';
import { TypeaheadComponent } from '../field_types/typeahead/typeahead.component';

@NgModule({
  declarations: [
    OperationpageComponent,
    OperationspageComponent,
    OperationcreatepageComponent,
    OperationeditpageComponent,
    OperationFormComponent,
    DateTimePickerComponent,
    TypeaheadComponent
  ],
  imports: [
    CommonModule,
    OperationRoutingModule,
    NgxUiLoaderModule,
    MatTableModule,
    MatPaginatorModule,
    BrowserAnimationsModule,
    MatMenuModule,
    MatIconModule,
    MatChipsModule,
    MatButtonModule,
    MatExpansionModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatAutocompleteModule,
    MatSortModule,
    NgbAccordionModule,
    NgbPopoverModule,
    NgbDatepickerModule,
    NgbTimepickerModule,
    NgbRatingModule,
    CKEditorModule,
    FormsModule,
    ReactiveFormsModule,
    MatSelectModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true }
  ]
})
export class OperationModule { }
