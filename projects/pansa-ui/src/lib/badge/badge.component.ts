import {Component, Input} from '@angular/core';

@Component({
  selector: 'pansa-badge',
  template: `<span [class]="badgeClass"><ng-content></ng-content></span>`,
  styleUrls: ['./badge.component.scss']
})
export class PansaBadgeComponent {
  @Input() level: 'primary' | 'secondary' | 'action' | 'danger' | 'transparent' = 'primary';

  get badgeClass(): string {
    return `pansa-badge-${this.level}`;
  }
}
