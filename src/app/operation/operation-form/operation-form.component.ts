import { Component, Input } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';

import { Observable, of } from 'rxjs';
import { catchError, debounceTime, map, startWith, subscribeOn, tap, switchMap, distinctUntilChanged } from 'rxjs/operators';

import { OperationCreateInterface } from '../_interfaces';
import { ajax } from 'rxjs/ajax';
import { Restangular } from 'ngx-restangular';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { ApiCondominiumService } from '../../_services/api-condominium.service';

export interface Status {
  value: number;
  label: string;
}

export interface User {
  value: number;
  label: string;
}

export interface Condiminium {
  value: number;
  label: string;
}

@Component({
  selector: 'app-operation-form',
  templateUrl: './operation-form.component.html',
  styleUrls: ['./operation-form.component.scss']
})
export class OperationFormComponent {
  public Editor = ClassicEditor;
  myForm: FormGroup;
  operationForm = new FormGroup({
    status: new FormControl(''),
    creatoDa: new FormControl(''),
    condominium: new FormControl(''),
    notifications: new FormControl(''),
    dateAperture: new FormControl(new Date(), {validators: [Validators.required]}),
    dateClosing: new FormControl(new Date(), {validators: [Validators.required]}),
    details: new FormControl(''),
    natures: new FormControl(''),
    appreciation: new FormControl(''),
    condominiums: new FormControl('')
  });
  statuses: Status[];
  users: User[];
  condominiums: User[];
  notifications: User[];
  apiCall: Restangular;
  condominiumsObs: Observable<Condiminium[]>;
  // condominiumsObs: string[] = ['pippo', 'paperino', 'pluto'];
  private operation: any;
  searching = false;
  searchFailed = false;

  constructor(private restangular: Restangular,
              private router: Router,
              private paramsRoute: ActivatedRoute,
              private fb: FormBuilder,
              private http: HttpClient,
              private condominiumService: ApiCondominiumService) {
      this.buildForm();
      this.condominiumsObs = this.condominiumService.search();
  }

  /**
   * Qui istanzio il {@link FormGroup}, ed è qui che assegno i validatori
   */
  buildForm(): void {
    this.myForm = this.fb.group({
      autocompleteField: [null, Validators.required],
      autocompleteField2: [null, Validators.required],
      autocompleteField3: [null, Validators.required]
    });

    this.statuses = [{value: 1, label: 'Attivo'}, {value: 2, label: 'Non attivo'}];
    this.users = [{value: 1, label: 'User 1'}, {value: 2, label: 'User 2'}];
    this.condominiums = [{value: 1, label: 'Condominio 1'}, {value: 2, label: 'Condominio 2'}];
    this.notifications = [{value: 1, label: 'Telefono'}, {value: 2, label: 'Email'}];
  }

  @Input()
  set setOperation(operation: OperationCreateInterface) {
    this.operation = operation;
    this.myForm.patchValue(operation);
  }

  onSubmit() {
    if (this.router.url === '/operation/create') {
      this.apiCall.post(this.myForm.value);
    } else {
      this.apiCall.patch(this.myForm.value);
    }
    window.location.href = '#/operations';
  }

  search = (text$: Observable<string>) => {
    console.log('pippo');
    return text$.pipe(
      debounceTime(300),
      distinctUntilChanged(),
      tap(() => this.searching = true),
      switchMap(term =>
        this.condominiumService.search().pipe(
          tap(() => this.searchFailed = false),
          catchError(() => {
            this.searchFailed = true;
            return of([]);
          }))
      ),
      tap(() => this.searching = false)
    )
  }
}
