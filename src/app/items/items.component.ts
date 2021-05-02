import { Component, OnInit, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { IProduct } from '../models/product';
import { ShopService } from './items.service';
import { IBrand } from '../models/brand';
import { IType } from '../models/productType';
import { ItemsParams } from '../models/itemsParams';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.scss']
})
export class ItemsComponent implements OnInit {
  @ViewChild('search') searchTerm: ElementRef;
  products: IProduct[];
  brands: IBrand[];
  types: IType[];
  itemsParams: ItemsParams;
  totalCount: number;
  sortOptions = [
    { name: 'Alphabetical', value: 'name' },
    { name: 'Price: Low to High', value: 'priceAsc' },
    { name: 'Price: High to Low', value: 'priceDesc' }
  ];

  constructor(private itemsService: ShopService) {
    this.itemsParams = this.itemsService.getShopParams();
  }

  ngOnInit() {
    this.getProducts(true);
    this.getBrands();
    this.getTypes();
  }

  getProducts(useCache = false) {
    this.itemsService.getProducts(useCache).subscribe(response => {
      this.products = response.data;
      this.totalCount = response.count;
    }, error => {
      console.log(error);
    });
  }

  getBrands() {
    this.itemsService.getBrands().subscribe(response => {
      this.brands = [{ id: 0, name: 'All' }, ...response];
    }, error => {
      console.log(error);
    });
  }

  getTypes() {
    this.itemsService.getTypes().subscribe(response => {
      this.types = [{ id: 0, name: 'All' }, ...response];
    }, error => {
      console.log(error);
    });
  }

  onBrandSelected(brandId: number) {
    const params = this.itemsService.getShopParams();
    params.brandId = brandId;
    params.pageNumber = 1;
    this.itemsService.setShopParams(params);
    this.getProducts();
  }

  onTypeSelected(typeId: number) {
    const params = this.itemsService.getShopParams();
    params.typeId = typeId;
    params.pageNumber = 1;
    this.itemsService.setShopParams(params);
    this.getProducts();
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
