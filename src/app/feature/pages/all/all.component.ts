import { Component } from '@angular/core';
import { DataServiceService } from '../../../shared/services/data-service.service';

@Component({
  selector: 'app-all',
  imports: [],
  templateUrl: './all.component.html',
  styleUrl: './all.component.scss'
})
export class AllComponent {
  getAllMeals: any[] = [];
  selectedCategory: string = 'All';

  constructor(private _DataServiceService: DataServiceService) {}

  ngOnInit(): void {
    this.fetchAllMeals();
  }

  fetchAllMeals() {
    this._DataServiceService.getAllMeals().subscribe({
      next: (res) => {
        this.getAllMeals = res.meals;
      },
      error: (e) => {
        console.log(e);
      }
    });
  }


}
