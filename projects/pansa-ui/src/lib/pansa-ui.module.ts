import { NgModule } from '@angular/core';
import { PansaButtonComponent } from './button/button.component';
import { PansaMenuComponent } from './menu/menu.component';
import { PansaMenuItemComponent } from './menuitem/menuitem.component';
import { PansaTopbarComponent } from './topbar/topbar.component';
import { PansaBreadcrumbComponent } from './breadcrumb/breadcrumb.component';
import { PansaIconComponent } from './icon/icon.component';
import { PansaBadgeComponent } from './badge/badge.component';
import {NgClass} from "@angular/common";



@NgModule({
  declarations: [
    PansaButtonComponent,
    PansaBadgeComponent,
    PansaMenuComponent,
    PansaMenuItemComponent,
    PansaTopbarComponent,
    PansaBreadcrumbComponent,
    PansaIconComponent,
  ],
  imports: [
    NgClass
  ],
  exports: [
    PansaButtonComponent,
    PansaBadgeComponent,
    PansaMenuComponent,
    PansaMenuItemComponent,
    PansaTopbarComponent,
    PansaBreadcrumbComponent,
    PansaIconComponent,
  ]
})
export class PansaUIModule { }
