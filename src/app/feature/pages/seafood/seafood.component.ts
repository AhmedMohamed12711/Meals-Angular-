import { Component } from '@angular/core';
import { DataServiceService } from '../../../shared/services/data-service.service';

@Component({
  selector: 'app-seafood',
  imports: [],
  templateUrl: './seafood.component.html',
  styleUrl: './seafood.component.scss'
})
export class SeafoodComponent {
  getAllMeals: any[] = [];
  selectedCategory: string = 'All';

  constructor(private _DataServiceService: DataServiceService) {}

  ngOnInit(): void {
    this.filterMeals('Seafood');
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
