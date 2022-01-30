import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditDishHomeComponent } from './edit-dish-home/edit-dish-home.component';

const routes: Routes = [{ path: '', component: EditDishHomeComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EditDishRoutingModule {}
