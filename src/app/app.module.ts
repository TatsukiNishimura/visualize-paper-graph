import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxGraphModule } from '@swimlane/ngx-graph';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { BibtexImportComponent } from './components/paper-create/bibtex-import/bibtex-import.component';
import { PaperCreateComponent } from './components/paper-create/paper-create.component';
import { PaperDetailComponent } from './components/paper-detail/paper-detail.component';
import { PaperEditComponent } from './components/paper-edit/paper-edit.component';
import { PaperListComponent } from './components/paper-list/paper-list.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PaperListComponent,
    PaperDetailComponent,
    PaperEditComponent,
    PaperCreateComponent,
    BibtexImportComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxGraphModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MatDialogModule,
    MatButtonModule,
    MatInputModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
