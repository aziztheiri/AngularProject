import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductComponent } from './product/product.component';
import { ResidencesComponent } from './residences/residences.component';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ResidenceDetailsComponentComponent } from './residences/residence-details-component/residence-details-component.component';
import { ApartmentsComponent } from './apartments/apartments.component';
import { ApartmentsByResidenceComponent } from './apartments-by-residence/apartments-by-residence.component';

const routes: Routes = [
  {path:"",redirectTo:"home", pathMatch: 'full' },
  {path:"home",component:HomeComponent},
 { path:"products",component:ProductComponent},
 {path:"residences",component:ResidencesComponent},
 {path:"products/:id",component:ProductDetailsComponent},
 {path:"residences/:idR",component:ResidenceDetailsComponentComponent},
 { path: "apartments/residence/:residenceId",component:ApartmentsByResidenceComponent}, 
 {path:"apartments",component:ApartmentsComponent},
 {path:"**",component:NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
