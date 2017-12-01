import { Component, OnInit } from '@angular/core';
import { Item} from './item';
//import {ITEMS} from '../server/items.db'
import { ITEMS } from '../server/items.db';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent implements OnInit {

  items = ITEMS;
  selectedItem: Item;

onSelect(selectedItem: Item): void {
  this.selectedItem = selectedItem;
}

  constructor() { }

  ngOnInit() {
  }

}
