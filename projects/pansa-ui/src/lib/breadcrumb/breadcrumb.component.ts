import {
  AfterViewInit,
  Component,
  ElementRef,
  Renderer2,
  ViewChild,
  ViewEncapsulation
} from '@angular/core';

@Component({
  selector: 'pansa-breadcrumb',
  templateUrl: './breadcrumb.component.html',
  styleUrls: ['./breadcrumb.component.scss'],
  encapsulation: ViewEncapsulation.None,
  host: {
    class: 'pansa-breadcrumb'
  }
})
export class PansaBreadcrumbComponent implements AfterViewInit {
  @ViewChild('container', {static: false})
  // @ts-ignore
  private staticContainer: ElementRef;

  constructor(private renderer: Renderer2) {
  }

  public ngAfterViewInit() {
    this.setLastLinkAttribute();
  }

  public onContentChange() {
    this.setLastLinkAttribute();
  }

  private setLastLinkAttribute() {
    const children = Array.from(this.staticContainer.nativeElement.children);
    this.renderer.setAttribute(
      children[children.length - 1], 'aria-current', 'page'
    );
  }
}
