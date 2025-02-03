import { Component } from '@angular/core';
import { DataServiceService } from '../../../shared/services/data-service.service';

@Component({
  selector: 'app-vegan',
  imports: [],
  templateUrl: './vegan.component.html',
  styleUrl: './vegan.component.scss'
})
export class VeganComponent {
  getAllMeals: any[] = [];
  selectedCategory: string = 'All';

  constructor(private _DataServiceService: DataServiceService) {}

  ngOnInit(): void {
    this.filterMeals('Vegan');
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
