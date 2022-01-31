import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddDishHomeComponent } from './add-dish-home/add-dish-home.component';
import { EditComponent } from './edit/edit.component';

const routes: Routes = [
  { path: '', component: AddDishHomeComponent },
  {
    path: ':id',
    component: AddDishHomeComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddDishRoutingModule {}
