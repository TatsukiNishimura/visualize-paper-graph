import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { PaperDetailComponent } from './components/paper-detail/paper-detail.component';
import { PaperListComponent } from './components/paper-list/paper-list.component';
const routes: Routes = [{ path: '', component: HomeComponent },
{ path: "papers", component: PaperListComponent },
{ path: 'papers/:id', component: PaperDetailComponent },
{ path: "*", redirectTo: "" }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
