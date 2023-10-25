import { Component, ViewChild, ViewEncapsulation } from '@angular/core';
import * as i0 from "@angular/core";
export class PansaBreadcrumbComponent {
    constructor(renderer) {
        this.renderer = renderer;
    }
    ngAfterViewInit() {
        this.setLastLinkAttribute();
    }
    onContentChange() {
        this.setLastLinkAttribute();
    }
    setLastLinkAttribute() {
        const children = Array.from(this.staticContainer.nativeElement.children);
        this.renderer.setAttribute(children[children.length - 1], 'aria-current', 'page');
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.10", ngImport: i0, type: PansaBreadcrumbComponent, deps: [{ token: i0.Renderer2 }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.2.10", type: PansaBreadcrumbComponent, selector: "pansa-breadcrumb", host: { classAttribute: "pansa-breadcrumb" }, viewQueries: [{ propertyName: "staticContainer", first: true, predicate: ["container"], descendants: true }], ngImport: i0, template: "<nav\n  #container\n  class=\"pansa-breadcrumb-nav\"\n  aria-label=\"Breadcrumb\"\n  (cdkObserveContent)=\"onContentChange()\"\n>\n  <ng-content></ng-content>\n</nav>\n", styles: [".pansa-breadcrumb-nav{display:inline-flex;flex-direction:row;flex-wrap:wrap}\n"], encapsulation: i0.ViewEncapsulation.None }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.10", ngImport: i0, type: PansaBreadcrumbComponent, decorators: [{
            type: Component,
            args: [{ selector: 'pansa-breadcrumb', encapsulation: ViewEncapsulation.None, host: {
                        class: 'pansa-breadcrumb'
                    }, template: "<nav\n  #container\n  class=\"pansa-breadcrumb-nav\"\n  aria-label=\"Breadcrumb\"\n  (cdkObserveContent)=\"onContentChange()\"\n>\n  <ng-content></ng-content>\n</nav>\n", styles: [".pansa-breadcrumb-nav{display:inline-flex;flex-direction:row;flex-wrap:wrap}\n"] }]
        }], ctorParameters: function () { return [{ type: i0.Renderer2 }]; }, propDecorators: { staticContainer: [{
                type: ViewChild,
                args: ['container', { static: false }]
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnJlYWRjcnVtYi5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9wYW5zYS11aS9zcmMvbGliL2JyZWFkY3J1bWIvYnJlYWRjcnVtYi5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9wYW5zYS11aS9zcmMvbGliL2JyZWFkY3J1bWIvYnJlYWRjcnVtYi5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBRUwsU0FBUyxFQUdULFNBQVMsRUFDVCxpQkFBaUIsRUFDbEIsTUFBTSxlQUFlLENBQUM7O0FBV3ZCLE1BQU0sT0FBTyx3QkFBd0I7SUFLbkMsWUFBb0IsUUFBbUI7UUFBbkIsYUFBUSxHQUFSLFFBQVEsQ0FBVztJQUN2QyxDQUFDO0lBRU0sZUFBZTtRQUNwQixJQUFJLENBQUMsb0JBQW9CLEVBQUUsQ0FBQztJQUM5QixDQUFDO0lBRU0sZUFBZTtRQUNwQixJQUFJLENBQUMsb0JBQW9CLEVBQUUsQ0FBQztJQUM5QixDQUFDO0lBRU8sb0JBQW9CO1FBQzFCLE1BQU0sUUFBUSxHQUFHLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxhQUFhLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDekUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxZQUFZLENBQ3hCLFFBQVEsQ0FBQyxRQUFRLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxFQUFFLGNBQWMsRUFBRSxNQUFNLENBQ3RELENBQUM7SUFDSixDQUFDOytHQXJCVSx3QkFBd0I7bUdBQXhCLHdCQUF3QixvTkNsQnJDLDBLQVFBOzs0RkRVYSx3QkFBd0I7a0JBVHBDLFNBQVM7K0JBQ0Usa0JBQWtCLGlCQUdiLGlCQUFpQixDQUFDLElBQUksUUFDL0I7d0JBQ0osS0FBSyxFQUFFLGtCQUFrQjtxQkFDMUI7Z0dBS08sZUFBZTtzQkFGdEIsU0FBUzt1QkFBQyxXQUFXLEVBQUUsRUFBQyxNQUFNLEVBQUUsS0FBSyxFQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQWZ0ZXJWaWV3SW5pdCxcbiAgQ29tcG9uZW50LFxuICBFbGVtZW50UmVmLFxuICBSZW5kZXJlcjIsXG4gIFZpZXdDaGlsZCxcbiAgVmlld0VuY2Fwc3VsYXRpb25cbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3BhbnNhLWJyZWFkY3J1bWInLFxuICB0ZW1wbGF0ZVVybDogJy4vYnJlYWRjcnVtYi5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL2JyZWFkY3J1bWIuY29tcG9uZW50LnNjc3MnXSxcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcbiAgaG9zdDoge1xuICAgIGNsYXNzOiAncGFuc2EtYnJlYWRjcnVtYidcbiAgfVxufSlcbmV4cG9ydCBjbGFzcyBQYW5zYUJyZWFkY3J1bWJDb21wb25lbnQgaW1wbGVtZW50cyBBZnRlclZpZXdJbml0IHtcbiAgQFZpZXdDaGlsZCgnY29udGFpbmVyJywge3N0YXRpYzogZmFsc2V9KVxuICAvLyBAdHMtaWdub3JlXG4gIHByaXZhdGUgc3RhdGljQ29udGFpbmVyOiBFbGVtZW50UmVmO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgcmVuZGVyZXI6IFJlbmRlcmVyMikge1xuICB9XG5cbiAgcHVibGljIG5nQWZ0ZXJWaWV3SW5pdCgpIHtcbiAgICB0aGlzLnNldExhc3RMaW5rQXR0cmlidXRlKCk7XG4gIH1cblxuICBwdWJsaWMgb25Db250ZW50Q2hhbmdlKCkge1xuICAgIHRoaXMuc2V0TGFzdExpbmtBdHRyaWJ1dGUoKTtcbiAgfVxuXG4gIHByaXZhdGUgc2V0TGFzdExpbmtBdHRyaWJ1dGUoKSB7XG4gICAgY29uc3QgY2hpbGRyZW4gPSBBcnJheS5mcm9tKHRoaXMuc3RhdGljQ29udGFpbmVyLm5hdGl2ZUVsZW1lbnQuY2hpbGRyZW4pO1xuICAgIHRoaXMucmVuZGVyZXIuc2V0QXR0cmlidXRlKFxuICAgICAgY2hpbGRyZW5bY2hpbGRyZW4ubGVuZ3RoIC0gMV0sICdhcmlhLWN1cnJlbnQnLCAncGFnZSdcbiAgICApO1xuICB9XG59XG4iLCI8bmF2XG4gICNjb250YWluZXJcbiAgY2xhc3M9XCJwYW5zYS1icmVhZGNydW1iLW5hdlwiXG4gIGFyaWEtbGFiZWw9XCJCcmVhZGNydW1iXCJcbiAgKGNka09ic2VydmVDb250ZW50KT1cIm9uQ29udGVudENoYW5nZSgpXCJcbj5cbiAgPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PlxuPC9uYXY+XG4iXX0=