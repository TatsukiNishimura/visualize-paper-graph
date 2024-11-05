import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgxGraphModule } from '@swimlane/ngx-graph';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { PaperDetailComponent } from './components/paper-detail/paper-detail.component';
import { PaperEditComponent } from './components/paper-edit/paper-edit.component';
import { PaperListComponent } from './components/paper-list/paper-list.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PaperListComponent,
    PaperDetailComponent,
    PaperEditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxGraphModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
