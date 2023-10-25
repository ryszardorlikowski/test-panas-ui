import { AfterViewInit, Renderer2 } from '@angular/core';
import * as i0 from "@angular/core";
export declare class PansaBreadcrumbComponent implements AfterViewInit {
    private renderer;
    private staticContainer;
    constructor(renderer: Renderer2);
    ngAfterViewInit(): void;
    onContentChange(): void;
    private setLastLinkAttribute;
    static ɵfac: i0.ɵɵFactoryDeclaration<PansaBreadcrumbComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<PansaBreadcrumbComponent, "pansa-breadcrumb", never, {}, {}, never, ["*"], false, never>;
}
