import { Component } from '@angular/core';
import { DataServiceService } from '../../../shared/services/data-service.service';

@Component({
  selector: 'app-breakfast',
  imports: [],
  templateUrl: './breakfast.component.html',
  styleUrl: './breakfast.component.scss'
})
export class BreakfastComponent {
  getAllMeals: any[] = [];
  selectedCategory: string = 'All';

  constructor(private _DataServiceService: DataServiceService) {}

  ngOnInit(): void {
    this.filterMeals('Breakfast');
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
