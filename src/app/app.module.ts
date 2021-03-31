import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NbThemeModule, NbLayoutModule, NbMenuModule, NbSidebarModule, NbCardModule, NbButtonModule, NbInputModule, NbDialogModule } from '@nebular/theme';
import { NbEvaIconsModule } from '@nebular/eva-icons';
import { HomeComponent } from './components/pages/home/home.component';
import { Error404Component } from './components/shared/error404/error404.component';
import { HttpClientModule } from '@angular/common/http';
import { NavComponent } from './components/shared/nav/nav.component';
import { UserService } from './services/user.service';

import { ListingComponent } from './components/pages/capacity/listing/listing.component';
import { EditCapacityComponent } from './components/pages/capacity/edit/edit.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ConfirmboxComponent } from './components/shared/confirmbox/confirmbox.component';
import { NewUserComponent } from './components/pages/new-user/new-user.component';
import { EditUserComponent } from './components/pages/edit-user/edit-user.component';
import { InfouserComponent } from './components/pages/infouser/infouser.component';
import { CapacityService } from './services/capacity.service';
import { UsercapacityService } from './services/usercapacity.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    Error404Component,
    NavComponent,
    ListingComponent,
    EditCapacityComponent,
    ConfirmboxComponent,
    NewUserComponent,
    EditUserComponent,
    InfouserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NbThemeModule.forRoot({ name: 'cosmic' }),
    NbLayoutModule,
    NbEvaIconsModule,
    NbMenuModule.forRoot(),
    NbSidebarModule.forRoot(),
    HttpClientModule,
    NbCardModule,
    NbButtonModule,
    FormsModule,
    ReactiveFormsModule,
    NbInputModule,
    NbDialogModule.forRoot()

  ],
  providers: [
    UserService,
    CapacityService,
    UsercapacityService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
