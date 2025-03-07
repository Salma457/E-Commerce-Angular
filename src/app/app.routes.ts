import { Routes } from '@angular/router';
import { ProductListComponent } from './product-list/product-list.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { CartComponent } from './cart/cart.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { authGuard } from './guards/auth.guard';

export const routes: Routes = [
  {
    //default path
    path:'',
    component:ProductListComponent,
    title:'product List'
  },{
    path:'product-details/:id',
    component:ProductDetailsComponent,
    title:'product Details'
  },{
    path:"login",
    component:LoginComponent,
    title:'login'
  },
  {
    path:"register",
    component:RegisterComponent,
    title:'register'
  },
  {
    path:"cart",
    component:CartComponent,
    title:'cart',
    canActivate:[authGuard]
  },
  {
    //wildcard syntx
    path:'**',
    component:NotFoundComponent,
    title:'Not Found'
  }
];
