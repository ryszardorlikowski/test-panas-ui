import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'pansa-menu-item',
  templateUrl: './menuitem.component.html',
  styleUrls: ['./menuitem.component.scss']
})
export class PansaMenuItemComponent implements OnInit {
  @Input() itemText: string = '';

  constructor() {}

  ngOnInit() {}
}
