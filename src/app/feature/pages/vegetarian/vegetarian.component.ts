import { Component } from '@angular/core';
import { DataServiceService } from '../../../shared/services/data-service.service';

@Component({
  selector: 'app-vegetarian',
  imports: [],
  templateUrl: './vegetarian.component.html',
  styleUrl: './vegetarian.component.scss'
})
export class VegetarianComponent {
  getAllMeals: any[] = [];
  selectedCategory: string = 'All';

  constructor(private _DataServiceService: DataServiceService) {}

  ngOnInit(): void {
    this.filterMeals('Vegetarian');
  }


  filterMeals(category: string) {
    this.selectedCategory = category;
      this._DataServiceService.getMealsByCategory(category).subscribe({
        next: (res) => {
          this.getAllMeals = res.meals;
        },
        error: (e) => {
          console.log(e);
        }
      });
    }
}
