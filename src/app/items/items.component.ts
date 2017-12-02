import { Component, OnInit } from '@angular/core';
import { Item} from './item';
//import {ITEMS} from '../server/items.db'
import { ITEMS } from '../server/items.db';
import { Observable } from "rxjs/Observable";
import { Store } from '@ngrx/store';
import { State } from '../reducers/index';
import * as reducers from '../reducers/index';
import * as itemActions from './item.actions'


@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent implements OnInit {

  items = ITEMS;
  selectedItem: Item;


   items$: Observable<Item[]>;

onSelect(selectedItem: Item): void {
  this.selectedItem = selectedItem;
}
 constructor(private store: Store<reducers.State>) {
    this.items$ = store.select(reducers.getItems);
    console.log("constructor", this.items$)
  }

  ngOnInit() {
        this.store.dispatch(new itemActions.LoadAction());
  }

}
