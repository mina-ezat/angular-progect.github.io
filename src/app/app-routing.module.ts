import { NgModule } from '@angular/core';
import { Routes, RouterModule, CanActivate } from '@angular/router';
import { ProdectsComponent } from './component/prodects/prodects.component';
import { LoginComponent } from './component/login/login.component';
import { AdminProdectComponent } from './admin/admin-prodect/admin-prodect.component';
import { NewProdectComponent } from './component/new-prodect/new-prodect.component';
import { HomeComponent } from './component/home/home.component';
import { LogoutComponent } from './component/logout/logout.component';
import { FormComponent } from './component/form/form.component';
import { AuthGuard } from './service/auth-guard.service';
import { AdminGuardGuard } from './service/admin-guard.guard';
import { FormProdectComponent } from './admin/form-prodect/form-prodect.component';
import { ShopingComponent } from './component/shoping/shoping.component';
import { ConfirmOrderComponent } from './component/prodects/confirm-order/confirm-order.component';
import { AllShopingComponent } from './component/all-shoping/all-shoping.component';
import { OrderShopingComponent } from './component/order-shoping/order-shoping.component';
import { OrderReceivedComponent } from './component/order-received/order-received.component';

const routes: Routes = [
   { path: "admin/prodect/new", component: FormProdectComponent, canActivate: [AuthGuard, AdminGuardGuard] },
  { path: "admin/prodect/:id", component: FormProdectComponent, canActivate: [AuthGuard, AdminGuardGuard] },

  { path: "login", component: LoginComponent },

  { path: "admin/prodect", component: AdminProdectComponent, canActivate: [AuthGuard, AdminGuardGuard] },
  { path: "new-prodect", component: NewProdectComponent, canActivate: [AuthGuard, AdminGuardGuard] },
  { path: "home", component: HomeComponent },
  { path: "", component: ShopingComponent },

  { path: "shoping", component: ShopingComponent },
  { path: "user", component: LogoutComponent, canActivate: [AuthGuard, AdminGuardGuard] },
  { path: "form", component: FormComponent },
  { path: "ConOrder", component: ConfirmOrderComponent, canActivate: [AuthGuard] },

  { path: "allshoping", component: AllShopingComponent, canActivate: [AuthGuard],
  children: [
      {
        path: 'order', // child route path
        component: OrderShopingComponent, // child route component that the router renders
      },
      {
        path: 'received', component: OrderReceivedComponent, // another child route component that the router render
      },
      { path: "prodects", component: ProdectsComponent} 
    ],
},
{ path: '**', component: ShopingComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
