import { Component, OnInit } from '@angular/core';
import { DataServiceService } from '../../shared/services/data-service.service';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-navbar',
  imports: [RouterLink,RouterLinkActive],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent implements OnInit{
  constructor(private _DataServiceService:DataServiceService){}
  strCategory:any[]=[]
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
}
