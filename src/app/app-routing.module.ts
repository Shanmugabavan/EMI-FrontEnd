import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {EmployeeComponent} from './employee/employee.component';

const appRoutes: Routes = [
  { path: '', redirectTo: '/employees', pathMatch: 'full' },
  // { path: 'recipes', component: RecipesComponent, children: [
  //     { path: '', component: RecipeStartComponent },
  //     { path: 'new', component: RecipeEditComponent },
  //     { path: ':id', component: RecipeDetailComponent, resolve: [RecipeResolverService]},
  //     { path: ':id/edit', component: RecipeEditComponent, resolve: [RecipeResolverService] }
  //   ] },
  { path: 'employees', component: EmployeeComponent },
];
@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
