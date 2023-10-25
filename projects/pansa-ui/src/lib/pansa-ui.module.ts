import { NgModule } from '@angular/core';
import { PansaButtonComponent } from './button/button.component';
import { PansaMenuComponent } from './menu/menu.component';
import { PansaMenuItemComponent } from './menuitem/menuitem.component';
import { PansaTopbarComponent } from './topbar/topbar.component';
import { PansaBreadcrumbComponent } from './breadcrumb/breadcrumb.component';
import { PansaIconComponent } from './icon/icon.component';



@NgModule({
  declarations: [
    PansaButtonComponent,
    PansaMenuComponent,
    PansaMenuItemComponent,
    PansaTopbarComponent,
    PansaBreadcrumbComponent,
    PansaIconComponent
  ],
  imports: [
  ],
  exports: [
    PansaButtonComponent,
    PansaMenuComponent,
    PansaMenuItemComponent,
    PansaTopbarComponent,
    PansaBreadcrumbComponent,
    PansaIconComponent
  ]
})
export class PansaUIModule { }
