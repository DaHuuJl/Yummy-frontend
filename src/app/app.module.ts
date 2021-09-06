import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import {MatDialog, MAT_DIALOG_DATA, MatDialogModule} from '@angular/material/dialog';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from "@angular/material/button";
import { MenuComponent } from './menu/menu.component';
import { BasketComponent } from './basket/basket.component';
import { ProfileComponent } from './profile/profile.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import {MatInputModule} from "@angular/material/input";
import {MatIconModule} from "@angular/material/icon";
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatMenuModule} from "@angular/material/menu";
import {MatBadgeModule} from "@angular/material/badge";
import {MatCardModule} from "@angular/material/card";
import { CardTitleMenuComponent } from './card-title-menu/card-title-menu.component';
import { CardMenuComponent } from './card-menu/card-menu.component';
import {MatGridListModule} from "@angular/material/grid-list";
import {MatButtonToggleModule} from "@angular/material/button-toggle";
import { BasketMenuComponent } from './basket-menu/basket-menu.component';
import {MatProgressSpinnerModule} from "@angular/material/progress-spinner";
import {ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import {MatAutocompleteModule} from "@angular/material/autocomplete";
import { WindowDialogRegistrationComponent } from './window-dialog-registration/window-dialog-registration.component';
import { WindowDialogLoginComponent } from './window-dialog-login/window-dialog-login.component';
import { MAT_SNACK_BAR_DEFAULT_OPTIONS } from '@angular/material/snack-bar';
import {MatSnackBar} from "@angular/material/snack-bar";
import {OrderService} from "./shared/services/order-service";
import {MatRippleModule} from "@angular/material/core";
import { WindowDialogProfileErrorComponent } from './window-dialog-profile-error/window-dialog-profile-error.component';
import {MatListModule} from "@angular/material/list";
import { ProfileHistoryComponent } from './profile-history/profile-history.component';
import {ImageToDataUrlModule} from "ngx-image2dataurl";
import { BasketCheckComponent } from './basket-check/basket-check.component';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegistrationComponent,
    HeaderComponent,
    FooterComponent,
    MenuComponent,
    BasketComponent,
    ProfileComponent,
    NotFoundComponent,
    AboutComponent,
    HomeComponent,
    CardTitleMenuComponent,
    CardMenuComponent,
    BasketMenuComponent,
    WindowDialogRegistrationComponent,
    WindowDialogLoginComponent,
    WindowDialogProfileErrorComponent,
    ProfileHistoryComponent,
    BasketCheckComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatInputModule,
    MatIconModule,
    MatToolbarModule,
    MatMenuModule,
    MatBadgeModule,
    MatCardModule,
    MatGridListModule,
    MatButtonToggleModule,
    MatProgressSpinnerModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatAutocompleteModule,
    MatDialogModule,
    MatRippleModule,
    MatListModule,
    ImageToDataUrlModule
  ],
  providers: [
    MatDialog,
    MatSnackBar,
    OrderService,
    {
    provide: MAT_SNACK_BAR_DEFAULT_OPTIONS,
    useValue: {
      duration: 41000,
      horizontalPosition: 'right',
      verticalPosition: 'bottom',
      panelClass: 'snackBarInfo'
    }

  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
