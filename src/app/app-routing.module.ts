import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ApartmentComponent } from './restrictedAppraisal/apartment/apartment.component';
import { LandComponent } from './restrictedAppraisal/land/land.component';
import { OthersComponent } from './restrictedAppraisal/others/others.component';
import { ActiveJobsListComponent } from './activeJobsList/active-jobs-list/active-jobs-list.component';


const routes: Routes = [
  { path: '', component: LandComponent, pathMatch: 'full' },
  { path: "login", component: LoginComponent },
  { path: "active-jobs-list", component : ActiveJobsListComponent},
  { path: "restricted-appraisal-apartment", component: ApartmentComponent },
  { path: "restricted-appraisal-land", component: LandComponent },
  { path: "restricted-appraisal-others" , component:OthersComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
