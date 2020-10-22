import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AuthService } from './service/auth.service';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './component/login/login.component';
import { ProdectsComponent } from './component/prodects/prodects.component';
import { AdminProdectComponent } from './admin/admin-prodect/admin-prodect.component';
import { NewProdectComponent } from './component/new-prodect/new-prodect.component';
import { HeaderComponent } from './component/header/header.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HomeComponent } from './component/home/home.component';
import { LogoutComponent } from './component/logout/logout.component';
import { FormComponent } from './component/form/form.component';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { environment } from '../environments/environment';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AngularFirestore } from "angularfire2/firestore";
import { AuthGuard } from './service/auth-guard.service';
import { UserService } from './service/user.service';
import { AdminGuardGuard } from './service/admin-guard.guard';
import { FormProdectComponent } from './admin/form-prodect/form-prodect.component';
import { CategoriesService } from './service/categories.service';
import { SaveProdectService } from './service/save-prodect.service';
import { CustomFormsModule } from 'ng2-validation';
import { DataTablesModule } from 'angular-datatables';
import { ProdectCartComponent } from './component/prodect-cart/prodect-cart.component';
import { ShopingComponent } from './component/shoping/shoping.component';
import { ProdectFilterComponent } from './component/shoping/prodect-filter/prodect-filter.component';
import { ShopingCartService } from './service/shoping-cart.service';
import { LocalstorgService } from './service/localstorg.service';
import { MDBBootstrapModule } from 'angular-bootstrap-md';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ProdectsComponent,
    AdminProdectComponent,
    NewProdectComponent,
    HeaderComponent,
    HomeComponent,
    LogoutComponent,
    FormComponent,
    FormProdectComponent,
    ProdectCartComponent,
    ShopingComponent,
    ProdectFilterComponent
  ],
  imports: [
  BrowserModule,
    AppRoutingModule,
    NgbModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    FormsModule,
    ReactiveFormsModule,
    DataTablesModule,
    MDBBootstrapModule.forRoot()

  ],
  providers: [
    AuthService,
    AuthGuard,
    UserService,
    AdminGuardGuard,
    CategoriesService,
    SaveProdectService,
    CustomFormsModule,
    AngularFirestore,
    ShopingCartService,
    LocalstorgService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
