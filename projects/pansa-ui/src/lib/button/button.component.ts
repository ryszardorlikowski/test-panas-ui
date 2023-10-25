/*
 * Copyright (c) 2023 Ville de Montreal. All rights reserved.
 * Licensed under the MIT license.
 * See LICENSE file in the project root for full license information.
 */
import {
  AfterContentInit,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ElementRef,
  Input,
} from '@angular/core';

@Component({
  selector: 'pansa-button',
  styleUrls: ['./button.component.scss'],
  templateUrl: './button.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    class: 'pansa-button',
    '[class.pansa-button-primary]': 'level === "primary"',
    '[class.pansa-button-secondary]': 'level === "secondary"',
    '[class.pansa-button-large]': 'size === "large"',
    '[class.pansa-button-medium]': 'size === "medium"',
    '[class.pansa-button-small]': 'size === "small"',
    '[class.pansa-button-no-text]': 'noText === true',
  }
})
export class PansaButtonComponent implements AfterContentInit {
  @Input() public level: 'primary' | 'secondary' | 'tertiary' = 'primary';
  @Input() public size: 'large' | 'medium' | 'small' = 'medium';
  @Input() public theme: 'light' | 'dark' = 'dark';
  public noText = false;

  constructor(
    private elementRef: ElementRef<HTMLElement>,
    private cdr: ChangeDetectorRef
  ) {
  }

  get nativeElement(): HTMLElement {
    return this.elementRef.nativeElement;
  }

  public ngAfterContentInit() {
    const childNodes = Array.from(this.nativeElement.childNodes);
    const textIndex = childNodes.findIndex(c => c.nodeType === Node.TEXT_NODE);
    this.noText = textIndex === -1;
    this.cdr.detectChanges();
  }
}
