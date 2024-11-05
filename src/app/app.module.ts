import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgxGraphModule } from '@swimlane/ngx-graph';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { PaperListComponent } from './components/paper-list/paper-list.component';
import { PaperDetailComponent } from './components/paper-detail/paper-detail.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PaperListComponent,
    PaperDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxGraphModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
