import { Routes } from '@angular/router';
import { AllComponent } from './feature/pages/all/all.component';
import { BeefComponent } from './feature/pages/beef/beef.component';
import { BreakfastComponent } from './feature/pages/breakfast/breakfast.component';
import { ChikenComponent } from './feature/pages/chiken/chiken.component';
import { DessertComponent } from './feature/pages/dessert/dessert.component';
import { GoatComponent } from './feature/pages/goat/goat.component';
import { LambComponent } from './feature/pages/lamb/lamb.component';
import { MiscellaneousComponent } from './feature/pages/miscellaneous/miscellaneous.component';
import { PastaComponent } from './feature/pages/pasta/pasta.component';
import { PorkComponent } from './feature/pages/pork/pork.component';
import { SeafoodComponent } from './feature/pages/seafood/seafood.component';
import { SideComponent } from './feature/pages/side/side.component';
import { StarterComponent } from './feature/pages/starter/starter.component';
import { VeganComponent } from './feature/pages/vegan/vegan.component';
import { VegetarianComponent } from './feature/pages/vegetarian/vegetarian.component';
import { NotfoundComponent } from './feature/additional/notfound/notfound.component';
export const routes: Routes = [
    {path:'',redirectTo:'All',pathMatch:'full'},
    {path:'All',component:AllComponent,title:'All'},
    {path:'Beef',component:BeefComponent,title:'Beef'},
    {path:'Breakfast',component:BreakfastComponent,title:'breakfast'},
    {path:'Chicken',component:ChikenComponent,title:'chicken'},
    {path:'Dessert',component:DessertComponent,title:'dessert'},
    {path:'Goat',component:GoatComponent,title:'goat'},
    {path:'Lamb',component:LambComponent,title:'lamb'},
    {path:'Miscellaneous',component:MiscellaneousComponent,title:'miscellaneous'},
    {path:'Pasta',component:PastaComponent,title:'pasta'},
    {path:'Pork',component:PorkComponent,title:'pork'},
    {path:'Seafood',component:SeafoodComponent,title:'seafood'},
    {path:'Side',component:SideComponent,title:'side'},
    {path:'Starter',component:StarterComponent,title:'starter'},
    {path:'Vegan',component:VeganComponent,title:'vegan'},
    {path:'Vegetarian',component:VegetarianComponent,title:'vegetarian'},
    {path:'**',component:NotfoundComponent}
];
