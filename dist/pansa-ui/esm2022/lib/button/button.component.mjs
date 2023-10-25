/*
 * Copyright (c) 2023 Ville de Montreal. All rights reserved.
 * Licensed under the MIT license.
 * See LICENSE file in the project root for full license information.
 */
import { ChangeDetectionStrategy, Component, Input, } from '@angular/core';
import * as i0 from "@angular/core";
export class PansaButtonComponent {
    constructor(elementRef, cdr) {
        this.elementRef = elementRef;
        this.cdr = cdr;
        this.level = 'primary';
        this.size = 'medium';
        this.theme = 'dark';
        this.noText = false;
    }
    get nativeElement() {
        return this.elementRef.nativeElement;
    }
    ngAfterContentInit() {
        const childNodes = Array.from(this.nativeElement.childNodes);
        const textIndex = childNodes.findIndex(c => c.nodeType === Node.TEXT_NODE);
        this.noText = textIndex === -1;
        this.cdr.detectChanges();
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.10", ngImport: i0, type: PansaButtonComponent, deps: [{ token: i0.ElementRef }, { token: i0.ChangeDetectorRef }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.2.10", type: PansaButtonComponent, selector: "pansa-button", inputs: { level: "level", size: "size", theme: "theme" }, host: { properties: { "class.pansa-button-primary": "level === \"primary\"", "class.pansa-button-secondary": "level === \"secondary\"", "class.pansa-button-large": "size === \"large\"", "class.pansa-button-medium": "size === \"medium\"", "class.pansa-button-small": "size === \"small\"", "class.pansa-button-no-text": "noText === true" }, classAttribute: "pansa-button" }, ngImport: i0, template: "<button class=\"pansa-button\">\n  <ng-content></ng-content>\n</button>\n", styles: [".pansa-button{transition:color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out;text-align:center;white-space:nowrap;vertical-align:middle;-webkit-user-select:none;user-select:none;cursor:pointer;display:inline-flex;align-items:center}.pansa-button.pansa-button-primary{background-color:#637381;border:solid .0625rem #097d6c}.pansa-button.pansa-button-primary:hover{background-color:#ced4da}.pansa-button.pansa-button-primary:disabled{color:#ced4da;border:solid .0625rem #ced4da}\n"], changeDetection: i0.ChangeDetectionStrategy.OnPush }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.10", ngImport: i0, type: PansaButtonComponent, decorators: [{
            type: Component,
            args: [{ selector: 'pansa-button', changeDetection: ChangeDetectionStrategy.OnPush, host: {
                        class: 'pansa-button',
                        '[class.pansa-button-primary]': 'level === "primary"',
                        '[class.pansa-button-secondary]': 'level === "secondary"',
                        '[class.pansa-button-large]': 'size === "large"',
                        '[class.pansa-button-medium]': 'size === "medium"',
                        '[class.pansa-button-small]': 'size === "small"',
                        '[class.pansa-button-no-text]': 'noText === true',
                    }, template: "<button class=\"pansa-button\">\n  <ng-content></ng-content>\n</button>\n", styles: [".pansa-button{transition:color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out;text-align:center;white-space:nowrap;vertical-align:middle;-webkit-user-select:none;user-select:none;cursor:pointer;display:inline-flex;align-items:center}.pansa-button.pansa-button-primary{background-color:#637381;border:solid .0625rem #097d6c}.pansa-button.pansa-button-primary:hover{background-color:#ced4da}.pansa-button.pansa-button-primary:disabled{color:#ced4da;border:solid .0625rem #ced4da}\n"] }]
        }], ctorParameters: function () { return [{ type: i0.ElementRef }, { type: i0.ChangeDetectorRef }]; }, propDecorators: { level: [{
                type: Input
            }], size: [{
                type: Input
            }], theme: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnV0dG9uLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL3BhbnNhLXVpL3NyYy9saWIvYnV0dG9uL2J1dHRvbi5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9wYW5zYS11aS9zcmMvbGliL2J1dHRvbi9idXR0b24uY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7R0FJRztBQUNILE9BQU8sRUFFTCx1QkFBdUIsRUFFdkIsU0FBUyxFQUVULEtBQUssR0FDTixNQUFNLGVBQWUsQ0FBQzs7QUFpQnZCLE1BQU0sT0FBTyxvQkFBb0I7SUFNL0IsWUFDVSxVQUFtQyxFQUNuQyxHQUFzQjtRQUR0QixlQUFVLEdBQVYsVUFBVSxDQUF5QjtRQUNuQyxRQUFHLEdBQUgsR0FBRyxDQUFtQjtRQVBoQixVQUFLLEdBQXlDLFNBQVMsQ0FBQztRQUN4RCxTQUFJLEdBQWlDLFFBQVEsQ0FBQztRQUM5QyxVQUFLLEdBQXFCLE1BQU0sQ0FBQztRQUMxQyxXQUFNLEdBQUcsS0FBSyxDQUFDO0lBTXRCLENBQUM7SUFFRCxJQUFJLGFBQWE7UUFDZixPQUFPLElBQUksQ0FBQyxVQUFVLENBQUMsYUFBYSxDQUFDO0lBQ3ZDLENBQUM7SUFFTSxrQkFBa0I7UUFDdkIsTUFBTSxVQUFVLEdBQUcsS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLFVBQVUsQ0FBQyxDQUFDO1FBQzdELE1BQU0sU0FBUyxHQUFHLFVBQVUsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsUUFBUSxLQUFLLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUMzRSxJQUFJLENBQUMsTUFBTSxHQUFHLFNBQVMsS0FBSyxDQUFDLENBQUMsQ0FBQztRQUMvQixJQUFJLENBQUMsR0FBRyxDQUFDLGFBQWEsRUFBRSxDQUFDO0lBQzNCLENBQUM7K0dBckJVLG9CQUFvQjttR0FBcEIsb0JBQW9CLG1lQzdCakMsMkVBR0E7OzRGRDBCYSxvQkFBb0I7a0JBZmhDLFNBQVM7K0JBQ0UsY0FBYyxtQkFHUCx1QkFBdUIsQ0FBQyxNQUFNLFFBQ3pDO3dCQUNKLEtBQUssRUFBRSxjQUFjO3dCQUNyQiw4QkFBOEIsRUFBRSxxQkFBcUI7d0JBQ3JELGdDQUFnQyxFQUFFLHVCQUF1Qjt3QkFDekQsNEJBQTRCLEVBQUUsa0JBQWtCO3dCQUNoRCw2QkFBNkIsRUFBRSxtQkFBbUI7d0JBQ2xELDRCQUE0QixFQUFFLGtCQUFrQjt3QkFDaEQsOEJBQThCLEVBQUUsaUJBQWlCO3FCQUNsRDtpSUFHZSxLQUFLO3NCQUFwQixLQUFLO2dCQUNVLElBQUk7c0JBQW5CLEtBQUs7Z0JBQ1UsS0FBSztzQkFBcEIsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbIi8qXG4gKiBDb3B5cmlnaHQgKGMpIDIwMjMgVmlsbGUgZGUgTW9udHJlYWwuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UuXG4gKiBTZWUgTElDRU5TRSBmaWxlIGluIHRoZSBwcm9qZWN0IHJvb3QgZm9yIGZ1bGwgbGljZW5zZSBpbmZvcm1hdGlvbi5cbiAqL1xuaW1wb3J0IHtcbiAgQWZ0ZXJDb250ZW50SW5pdCxcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXG4gIENoYW5nZURldGVjdG9yUmVmLFxuICBDb21wb25lbnQsXG4gIEVsZW1lbnRSZWYsXG4gIElucHV0LFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAncGFuc2EtYnV0dG9uJyxcbiAgc3R5bGVVcmxzOiBbJy4vYnV0dG9uLmNvbXBvbmVudC5zY3NzJ10sXG4gIHRlbXBsYXRlVXJsOiAnLi9idXR0b24uY29tcG9uZW50Lmh0bWwnLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbiAgaG9zdDoge1xuICAgIGNsYXNzOiAncGFuc2EtYnV0dG9uJyxcbiAgICAnW2NsYXNzLnBhbnNhLWJ1dHRvbi1wcmltYXJ5XSc6ICdsZXZlbCA9PT0gXCJwcmltYXJ5XCInLFxuICAgICdbY2xhc3MucGFuc2EtYnV0dG9uLXNlY29uZGFyeV0nOiAnbGV2ZWwgPT09IFwic2Vjb25kYXJ5XCInLFxuICAgICdbY2xhc3MucGFuc2EtYnV0dG9uLWxhcmdlXSc6ICdzaXplID09PSBcImxhcmdlXCInLFxuICAgICdbY2xhc3MucGFuc2EtYnV0dG9uLW1lZGl1bV0nOiAnc2l6ZSA9PT0gXCJtZWRpdW1cIicsXG4gICAgJ1tjbGFzcy5wYW5zYS1idXR0b24tc21hbGxdJzogJ3NpemUgPT09IFwic21hbGxcIicsXG4gICAgJ1tjbGFzcy5wYW5zYS1idXR0b24tbm8tdGV4dF0nOiAnbm9UZXh0ID09PSB0cnVlJyxcbiAgfVxufSlcbmV4cG9ydCBjbGFzcyBQYW5zYUJ1dHRvbkNvbXBvbmVudCBpbXBsZW1lbnRzIEFmdGVyQ29udGVudEluaXQge1xuICBASW5wdXQoKSBwdWJsaWMgbGV2ZWw6ICdwcmltYXJ5JyB8ICdzZWNvbmRhcnknIHwgJ3RlcnRpYXJ5JyA9ICdwcmltYXJ5JztcbiAgQElucHV0KCkgcHVibGljIHNpemU6ICdsYXJnZScgfCAnbWVkaXVtJyB8ICdzbWFsbCcgPSAnbWVkaXVtJztcbiAgQElucHV0KCkgcHVibGljIHRoZW1lOiAnbGlnaHQnIHwgJ2RhcmsnID0gJ2RhcmsnO1xuICBwdWJsaWMgbm9UZXh0ID0gZmFsc2U7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBlbGVtZW50UmVmOiBFbGVtZW50UmVmPEhUTUxFbGVtZW50PixcbiAgICBwcml2YXRlIGNkcjogQ2hhbmdlRGV0ZWN0b3JSZWZcbiAgKSB7XG4gIH1cblxuICBnZXQgbmF0aXZlRWxlbWVudCgpOiBIVE1MRWxlbWVudCB7XG4gICAgcmV0dXJuIHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50O1xuICB9XG5cbiAgcHVibGljIG5nQWZ0ZXJDb250ZW50SW5pdCgpIHtcbiAgICBjb25zdCBjaGlsZE5vZGVzID0gQXJyYXkuZnJvbSh0aGlzLm5hdGl2ZUVsZW1lbnQuY2hpbGROb2Rlcyk7XG4gICAgY29uc3QgdGV4dEluZGV4ID0gY2hpbGROb2Rlcy5maW5kSW5kZXgoYyA9PiBjLm5vZGVUeXBlID09PSBOb2RlLlRFWFRfTk9ERSk7XG4gICAgdGhpcy5ub1RleHQgPSB0ZXh0SW5kZXggPT09IC0xO1xuICAgIHRoaXMuY2RyLmRldGVjdENoYW5nZXMoKTtcbiAgfVxufVxuIiwiPGJ1dHRvbiBjbGFzcz1cInBhbnNhLWJ1dHRvblwiPlxuICA8bmctY29udGVudD48L25nLWNvbnRlbnQ+XG48L2J1dHRvbj5cbiJdfQ==