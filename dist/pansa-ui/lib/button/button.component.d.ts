import { AfterContentInit, ChangeDetectorRef, ElementRef } from '@angular/core';
import * as i0 from "@angular/core";
export declare class PansaButtonComponent implements AfterContentInit {
    private elementRef;
    private cdr;
    level: 'primary' | 'secondary' | 'tertiary';
    size: 'large' | 'medium' | 'small';
    theme: 'light' | 'dark';
    noText: boolean;
    constructor(elementRef: ElementRef<HTMLElement>, cdr: ChangeDetectorRef);
    get nativeElement(): HTMLElement;
    ngAfterContentInit(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<PansaButtonComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<PansaButtonComponent, "pansa-button", never, { "level": { "alias": "level"; "required": false; }; "size": { "alias": "size"; "required": false; }; "theme": { "alias": "theme"; "required": false; }; }, {}, never, ["*"], false, never>;
}
