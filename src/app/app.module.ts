import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { ApartmentComponent } from './restrictedAppraisal/apartment/apartment.component';
import { LandComponent } from './restrictedAppraisal/land/land.component';
import { OthersComponent } from './restrictedAppraisal/others/others.component';
import { ImageCropperModule } from 'ngx-image-cropper';
import { ActiveJobsListComponent } from './activeJobsList/active-jobs-list/active-jobs-list.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ApartmentComponent,
    LandComponent,
    OthersComponent,
    ActiveJobsListComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    ImageCropperModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
