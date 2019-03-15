import { Component , OnInit, Input, Output } from '@angular/core';
import { EventEmitter } from 'events';

@Component({
  selector: 'filter-textbox',
  // template: `Filter: <input type='text'[value]='filter' (input)='filter=$event.target.value'/> `
  // ngModel is easy way
  template: `Filter: <input type='text' [(ngModel)]='filter' /> `

})

export class FilterTextboxComponent implements OnInit {

  private _filter: string;
  @Input() get filter() {
    return this._filter;
  }

  set filter(val:string) {
    this._filter = val ;
    this.changed.emit(this.filter);//Raised changed event
  }

  @Output() changed: EventEmitter<string> = new EventEmitter<string>();
  constructor() {}


  ngOnInit() {

  }
}
