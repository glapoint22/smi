import { ChangeDetectionStrategy, Component } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { MenuItemComponent } from '../menu-item/menu-item.component';
import { DataEntryMenuPanelComponent } from '../data-entry-menu-panel/data-entry-menu-panel.component';
import { DashboardMenuPanelComponent } from '../dashboard-menu-panel/dashboard-menu-panel.component';

@Component({
  selector: 'header',
  standalone: true,
  imports: [
    NavbarComponent,
    MenuItemComponent,
    DataEntryMenuPanelComponent,
    DashboardMenuPanelComponent
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeaderComponent {

}
