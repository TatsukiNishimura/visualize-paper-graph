import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { PaperListComponent } from './components/paper-list/paper-list.component';

const routes: Routes = [{ path: '', component: HomeComponent },
{ path: "paperList", component: PaperListComponent },
{ path: "*", redirectTo: "" }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
