import { Injectable } from '@angular/core';
import { Restangular } from 'ngx-restangular';
import { map } from 'rxjs/operators';
import {MatTableDataSource} from "@angular/material";

@Injectable({
  providedIn: 'root'
})
export class ApiCondominiumService {
  constructor(private restangular: Restangular) { }

  search() {
    return this.restangular.all('operations').getList().subscribe(accounts => {
      return accounts;
    });
    /*
    .pipe(
      map(response => {
        console.log(response);
        return response[1];
      })
    );
     */
  }
}
