import { Component } from '@angular/core';
import { DataServiceService } from '../../../shared/services/data-service.service';

@Component({
  selector: 'app-starter',
  imports: [],
  templateUrl: './starter.component.html',
  styleUrl: './starter.component.scss'
})
export class StarterComponent {
  getAllMeals: any[] = [];
  selectedCategory: string = 'All';

  constructor(private _DataServiceService: DataServiceService) {}

  ngOnInit(): void {
    this.filterMeals('Starter');
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
