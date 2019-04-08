import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OperationspageComponent } from './operationspage/operationspage.component';
import { OperationpageComponent } from './operationpage/operationpage.component';
import { OperationcreatepageComponent } from './operationcreatepage/operationcreatepage.component';
import { OperationeditpageComponent } from './operationeditpage/operationeditpage.component';

const routes: Routes = [
  { path: 'operations', component: OperationspageComponent },
  { path: 'operation/create', component: OperationcreatepageComponent },
  { path: 'operation/edit/:id', component: OperationeditpageComponent },
  { path: 'operation/:id', component: OperationpageComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OperationRoutingModule { }
