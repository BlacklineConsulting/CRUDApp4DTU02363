import { Component, OnInit, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { IProduct } from '../models/product';
import { ItemsService } from './items.service';
import { ItemsParams } from '../models/itemsParams';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.scss']
})
export class ItemsComponent implements OnInit {
  @ViewChild('search') searchTerm: ElementRef;
  products: IProduct[];
  itemsParams: ItemsParams;
  totalCount: number;
  sortOptions = [
    { name: 'Alphabetical', value: 'name' },
    { name: 'Price: Low to High', value: 'priceAsc' },
    { name: 'Price: High to Low', value: 'priceDesc' }
  ];

  constructor(private itemsService: ItemsService) {
    this.itemsParams = this.itemsService.getItemsParams();
  }

  ngOnInit() {
    this.getProducts(true);

  }

  getProducts(useCache = false) {
    this.itemsService.getProducts(useCache).subscribe(response => {
      this.products = response.data;
      this.totalCount = response.count;
    }, error => {
      console.log(error);
    });
  }

  onSortSelected(sort: string) {
    const params = this.itemsService.getShopParams();
    params.sort = sort;
    this.itemsService.setShopParams(params);
    this.getProducts();
  }

  onPageChanged(event: any) {
    const params = this.itemsService.getShopParams();
    if (params.pageNumber !== event) {
      params.pageNumber = event;
      this.itemsService.setShopParams(params);
      this.getProducts(true);
    }
  }

  onSearch() {
    const params = this.itemsService.getShopParams();
    params.search = this.searchTerm.nativeElement.value;
    params.pageNumber = 1;
    this.itemsService.setShopParams(params);
    this.getProducts();
  }

  onReset() {
    this.searchTerm.nativeElement.value = '';
    this.itemsParams = new ItemsParams();
    this.itemsService.setShopParams(this.itemsParams);
    this.getProducts();
  }
}
