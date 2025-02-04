import { Component } from '@angular/core';
import { NavbarComponent } from "../../../layout/navbar/navbar.component";
import { DataServiceService } from '../../../shared/services/data-service.service';
import { Router, RouterOutlet } from '@angular/router';
import { NgFor } from '@angular/common';
@Component({
  selector: 'app-home',
  imports: [NavbarComponent,RouterOutlet,NgFor],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent  {
  constructor(private _DataServiceService:DataServiceService,private router: Router){}
  strCategory:any[]=[]
  // strCategory = ['Food', 'Drinks', 'Desserts'];
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this._DataServiceService.getCatLinks().subscribe({
      next:(res)=>{
        this.strCategory=res.meals
      },
      error:(e)=>{
        console.log(e);
      }
    })
  }
  onCategoryChange(event: Event) {
    const selectedCategory = (event.target as HTMLSelectElement).value;
    this.router.navigate(['/', selectedCategory]);
  }

}
