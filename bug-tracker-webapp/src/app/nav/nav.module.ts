import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TopNavComponent} from './top-nav/top-nav.component';
import {MatToolbarModule} from "@angular/material/toolbar";
import {RouterModule} from "@angular/router";
import {MatButtonModule} from "@angular/material/button";
import { SideNavComponent } from './side-nav/side-nav.component';
import {MatListModule} from "@angular/material/list";
import {MatIconModule} from "@angular/material/icon";
import {ThemeModule} from "../theme/theme.module";


@NgModule({
  declarations: [TopNavComponent, SideNavComponent],
    exports: [
        TopNavComponent,
        SideNavComponent
    ],
    imports: [
        CommonModule,
        MatToolbarModule,
        RouterModule,
        MatButtonModule,
        MatListModule,
        MatIconModule,
        ThemeModule
    ]
})
export class NavModule {
}
