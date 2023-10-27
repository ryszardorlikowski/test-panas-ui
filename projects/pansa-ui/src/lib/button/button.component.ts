import {
  AfterContentInit,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ElementRef, Input
} from '@angular/core';

@Component({
  selector: 'pansa-button',
  styleUrls: ['./button.component.scss'],
  templateUrl: './button.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PansaButtonComponent implements AfterContentInit {
  @Input() public level: 'primary' | 'secondary' | 'action' | 'danger' | 'transparent' = 'primary';
  @Input() public size: 'large' | 'medium' | 'small' = 'medium';
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
