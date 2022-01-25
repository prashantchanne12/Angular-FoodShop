import { Component, OnInit, Input } from '@angular/core';
import { CartItem } from 'src/app/service/cart.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
})
export class CardComponent implements OnInit {
  @Input() food: CartItem = {
    quantity: 1,
    id: 0,
    name: '',
    imgUrl: '',
    price: 0,
    desc: '',
    category: [''],
  };

  constructor() {}

  ngOnInit(): void {}
}
