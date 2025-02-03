import { Component, OnInit } from '@angular/core';
import { NavbarComponent } from "../../../layout/navbar/navbar.component";
import { DataServiceService } from '../../../shared/services/data-service.service';
import { RouterOutlet } from '@angular/router';
@Component({
  selector: 'app-home',
  imports: [NavbarComponent,RouterOutlet],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent  {

}
