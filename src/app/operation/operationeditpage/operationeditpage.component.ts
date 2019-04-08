import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { RestangularModule, Restangular } from 'ngx-restangular';
import { NgxUiLoaderService } from 'ngx-ui-loader';

import { OperationCreateInterface } from '../_interfaces';

@Component({
  selector: 'app-operationeditpage',
  templateUrl: './operationeditpage.component.html',
  styleUrls: ['./operationeditpage.component.scss']
})
export class OperationeditpageComponent implements OnInit {
  hero$: Observable<any>;
  data?: any;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private restangular: Restangular,
              private ngxService: NgxUiLoaderService) { }

  ngOnInit() {
    this.hero$ = this.route.paramMap.pipe(
      switchMap((params: ParamMap) => {
        this.ngxService.start();
        return this.restangular.one('operations', params.get('id')).get();
      })
    );

    this.hero$.subscribe(list => {
      this.ngxService.stop();
      this.data = list;
    });
  }
}
