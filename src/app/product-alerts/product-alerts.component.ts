import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { __importDefault } from 'tslib';
import { Product } from '../products';

@Component({
  selector: 'app-product-alerts',
  templateUrl: './product-alerts.component.html',
  styleUrls: ['./product-alerts.component.css']
})
export class ProductAlertsComponent{

 // @Input() product!: Product;
  @Input() product: Product | undefined;
  @Output() notify = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }
  

}
