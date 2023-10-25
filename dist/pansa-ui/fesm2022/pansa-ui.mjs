import * as i0 from '@angular/core';
import { Component, ChangeDetectionStrategy, Input, ViewEncapsulation, ViewChild, NgModule } from '@angular/core';

/*
 * Copyright (c) 2023 Ville de Montreal. All rights reserved.
 * Licensed under the MIT license.
 * See LICENSE file in the project root for full license information.
 */
class PansaButtonComponent {
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

class PansaMenuComponent {
    constructor() { }
    ngOnInit() { }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.10", ngImport: i0, type: PansaMenuComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.2.10", type: PansaMenuComponent, selector: "pansa-menu", ngImport: i0, template: "<ul class=\"menu\">\n  <!-- Tutaj elementy menu -->\n</ul>\n", styles: [""] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.10", ngImport: i0, type: PansaMenuComponent, decorators: [{
            type: Component,
            args: [{ selector: 'pansa-menu', template: "<ul class=\"menu\">\n  <!-- Tutaj elementy menu -->\n</ul>\n" }]
        }], ctorParameters: function () { return []; } });

class PansaMenuItemComponent {
    constructor() {
        this.itemText = '';
    }
    ngOnInit() { }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.10", ngImport: i0, type: PansaMenuItemComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.2.10", type: PansaMenuItemComponent, selector: "pansa-menu-item", inputs: { itemText: "itemText" }, ngImport: i0, template: "<li class=\"menu-item\">\n  {{ itemText }}\n</li>\n", styles: [""] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.10", ngImport: i0, type: PansaMenuItemComponent, decorators: [{
            type: Component,
            args: [{ selector: 'pansa-menu-item', template: "<li class=\"menu-item\">\n  {{ itemText }}\n</li>\n" }]
        }], ctorParameters: function () { return []; }, propDecorators: { itemText: [{
                type: Input
            }] } });

class PansaTopbarComponent {
    constructor() { }
    ngOnInit() { }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.10", ngImport: i0, type: PansaTopbarComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.2.10", type: PansaTopbarComponent, selector: "pansa-topbar", ngImport: i0, template: "<p>topbar works!</p>\n", styles: [""] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.10", ngImport: i0, type: PansaTopbarComponent, decorators: [{
            type: Component,
            args: [{ selector: 'pansa-topbar', template: "<p>topbar works!</p>\n" }]
        }], ctorParameters: function () { return []; } });

class PansaBreadcrumbComponent {
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

class PansaIconComponent {
    constructor() { }
    ngOnInit() { }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.10", ngImport: i0, type: PansaIconComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.2.10", type: PansaIconComponent, selector: "pansa-icon", ngImport: i0, template: "<p>icon works!</p>\n", styles: [""] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.10", ngImport: i0, type: PansaIconComponent, decorators: [{
            type: Component,
            args: [{ selector: 'pansa-icon', template: "<p>icon works!</p>\n" }]
        }], ctorParameters: function () { return []; } });

class PansaUIModule {
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.10", ngImport: i0, type: PansaUIModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule }); }
    static { this.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "16.2.10", ngImport: i0, type: PansaUIModule, declarations: [PansaButtonComponent,
            PansaMenuComponent,
            PansaMenuItemComponent,
            PansaTopbarComponent,
            PansaBreadcrumbComponent,
            PansaIconComponent], exports: [PansaButtonComponent,
            PansaMenuComponent,
            PansaMenuItemComponent,
            PansaTopbarComponent,
            PansaBreadcrumbComponent,
            PansaIconComponent] }); }
    static { this.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "16.2.10", ngImport: i0, type: PansaUIModule }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.10", ngImport: i0, type: PansaUIModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [
                        PansaButtonComponent,
                        PansaMenuComponent,
                        PansaMenuItemComponent,
                        PansaTopbarComponent,
                        PansaBreadcrumbComponent,
                        PansaIconComponent
                    ],
                    imports: [],
                    exports: [
                        PansaButtonComponent,
                        PansaMenuComponent,
                        PansaMenuItemComponent,
                        PansaTopbarComponent,
                        PansaBreadcrumbComponent,
                        PansaIconComponent
                    ]
                }]
        }] });

/*
 * Public API Surface of pansa-ui
 */

/**
 * Generated bundle index. Do not edit.
 */

export { PansaBreadcrumbComponent, PansaButtonComponent, PansaIconComponent, PansaMenuComponent, PansaMenuItemComponent, PansaTopbarComponent, PansaUIModule };
//# sourceMappingURL=pansa-ui.mjs.map
