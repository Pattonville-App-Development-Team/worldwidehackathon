import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import {
  MatButtonModule,
  MatIconModule,
  MatToolbarModule,
  MatSidenavModule,
  MatListModule,
  MatCheckboxModule,
  MatStepperModule,
  MatFormFieldModule,
  MatInputModule, MatCardModule, MatChipsModule, MatGridListModule,
  MatSelectModule,
  MatBadgeModule, MatDialogModule,
} from '@angular/material';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { CreationComponent } from './creation/creation.component';
import { SidenavFilterPipe } from './pipes/sidenav-filter.pipe';
import {ReactiveFormsModule} from '@angular/forms';
import {WebcamModule} from 'ngx-webcam';
import { ItemComponent } from './sidenav/item/item.component';
import {HttpClientModule} from '@angular/common/http';
import { FlexLayoutModule } from '@angular/flex-layout';
import { RequestpageComponent } from './requestpage/requestpage.component';
import { RequestdialogComponent } from './requestdialog/requestdialog.component';

@NgModule({
  declarations: [
    AppComponent,
    SidenavComponent,
    CreationComponent,
    SidenavFilterPipe,
    ItemComponent,
    RequestpageComponent,
    RequestdialogComponent,
  ],
  imports: [
    WebcamModule,
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MatButtonModule,
    MatIconModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatCheckboxModule,
    MatStepperModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatInputModule,
    MatCheckboxModule,
    MatGridListModule,
    MatCardModule,
    MatChipsModule,
    MatListModule,
    MatSelectModule,
    MatBadgeModule,
    HttpClientModule,
    MatBadgeModule,
    FlexLayoutModule,
    MatSelectModule,
    MatDialogModule
  ],
  entryComponents: [RequestdialogComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
