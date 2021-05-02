import { Component, OnInit } from '@angular/core';
import { IProduct } from '../../models/product';
import { ItemsService } from '../items.service';
import { ActivatedRoute } from '@angular/router';
import { BreadcrumbService } from 'xng-breadcrumb';
import { CartService } from '../../cart/cart.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class ItemComponent implements OnInit {
  product: IProduct;
  quantity = 1;

  constructor(private itemsService: ItemsService,
              private activateRoute: ActivatedRoute,
              private bcService: BreadcrumbService,
              private cartService: CartService) {
    this.bcService.set('@details', '');
  }

  ngOnInit() {
    this.loadProduct();
  }

  addItemToBasket() {
    this.cartService.addItemToCart(this.product, this.quantity);
  }

  incrementQuantity() {
    this.quantity++;
  }

  decrementQuantity() {
    if (this.quantity > 1) {
      this.quantity--;
    }
  }

  loadProduct() {
    this.itemsService.getProduct(+this.activateRoute.snapshot.paramMap.get('id')).subscribe(product => {
      this.product = product;
      this.bcService.set('@details', product.name);
    }, error => {
      console.log(error);
    });
  }

}
