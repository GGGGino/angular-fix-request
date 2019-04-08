import { Component, OnInit, ViewChild } from '@angular/core';
import { RestangularModule, Restangular } from 'ngx-restangular';
import { NgxUiLoaderService } from 'ngx-ui-loader';
import { MatSort, MatPaginator, MatTableDataSource } from '@angular/material';

import { OperationCreateInterface } from '../_interfaces';

@Component({
  selector: 'app-operationspage',
  templateUrl: 'operationspage.component.html',
  styleUrls: ['operationspage.component.scss']
})
export class OperationspageComponent implements OnInit {

  displayedColumns: string[] = ['actions', 'operationNumber', 'openingDate', 'description', 'condominium', 'favouriteSupplier'];
  dataSource: MatTableDataSource<OperationCreateInterface[]>;

  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(private restangular: Restangular,
              private ngxService: NgxUiLoaderService) { }

  @ViewChild(MatSort) sort: MatSort;

  ngOnInit() {
    this.ngxService.start();

    this.restangular.all('operations').getList().subscribe(accounts => {
      this.ngxService.stop();
      this.dataSource = new MatTableDataSource<any[]>(accounts);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });
  }

  removeAt(index: number) {
    const data = this.dataSource.data;

    if ( data.length <= 0 || isNaN(index) ) {
      return;
    }

    const dataRemoved: any[] = data.splice((this.paginator.pageIndex * this.paginator.pageSize) + index, 1);

    if ( dataRemoved.length > 0 ) {
      const singularDataRemoved: any = dataRemoved[0];
      this.restangular.one('operations', singularDataRemoved.id).remove().subscribe(result => {
        this.dataSource.data = data;
      });
    }
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
