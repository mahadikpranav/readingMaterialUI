import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddComponent } from './add/add.component';
import { SearchComponent } from './search/search.component';
import { ViewComponent } from './view/view.component';

const routes: Routes = [
  {path: "books", component: ViewComponent},
  {path: "magazines", component: ViewComponent},
  {path: "allreadingmaterial", component: ViewComponent},
  {path: "searchbooks", component: SearchComponent}, 
  {path: "searchmagazines", component: SearchComponent},
  {path: "addbooks", component: AddComponent},
  {path: "addmagazines", component: AddComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
