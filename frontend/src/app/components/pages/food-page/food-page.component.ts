import { Component } from '@angular/core';
import { Food } from '../../../shared/models/Food';
import { ActivatedRoute } from '@angular/router';
import { FoodService } from '../../../services/food.service';
import { StarRatingComponent } from '../../partials/star-rating/star-rating.component';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-food-page',
  standalone: true,
  imports: [StarRatingComponent, CommonModule, RouterModule],
  templateUrl: './food-page.component.html',
  styleUrl: './food-page.component.css',
})
export class FoodPageComponent {
  food!: Food;

  constructor(activatedRoute: ActivatedRoute, foodService: FoodService) {
    activatedRoute.params.subscribe((params) => {
      if (params.id) this.food = foodService.getFoodById(params.id);
    });
  }
}
