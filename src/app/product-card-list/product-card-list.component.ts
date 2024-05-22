import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ProductCardComponent } from '../product-card/product-card.component';
import { Product } from '../model/product';
import { PaginationComponent } from '../pagination/pagination.component';

@Component({
  selector: 'app-product-card-list',
  standalone: true,
  imports: [ProductCardComponent, PaginationComponent],
  templateUrl: './product-card-list.component.html',
  styleUrl: './product-card-list.component.css',
})
export class ProductCardListComponent {
  @Input({ required: true })
  products!: Product[];

  @Output()
  view = new EventEmitter<Product>();

  @Output()
  edit = new EventEmitter<Product>();

  @Output()
  remove = new EventEmitter<Product>();

  pageIndex = 1;
}
