import { ProductService } from './../service/product.service';
import { CurrencyPipe } from '@angular/common';
import { Component, Input, inject } from '@angular/core';
import { Product } from '../model/product';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-detail-page',
  standalone: true,
  imports: [CurrencyPipe],
  templateUrl: './product-detail-page.component.html',
  styleUrl: './product-detail-page.component.css',
})
export class ProductDetailPageComponent {
  @Input()
  product!: Product;

  private router = inject(Router);

  private ProductService = inject(ProductService);

  onEdit(): void {
    this.router.navigate(['product', 'form', this.product.id]);
  }

  onBack(): void {
    this.router.navigate(['products']);
  }

  onRemove(): void {
    this.ProductService.remove(this.product.id).subscribe(() => this.router.navigate(['products']));
  }
}
