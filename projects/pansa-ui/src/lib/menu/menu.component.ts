import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'pansa-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class PansaMenuComponent {
  @Input() items: { label: string, icon?: string, badge?: string | number }[] = [];
  @Output() itemClicked: EventEmitter<string> = new EventEmitter<string>();

  onItemClick(item: string) {
    this.itemClicked.emit(item);
  }
}
