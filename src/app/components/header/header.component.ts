import { ChangeDetectionStrategy, Component } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { MenuItemComponent } from '../menu-item/menu-item.component';
import { DataEntryMenuPanelComponent } from '../data-entry-menu-panel/data-entry-menu-panel.component';
import { DashboardMenuPanelComponent } from '../dashboard-menu-panel/dashboard-menu-panel.component';
import { ResearchMenuPanelComponent } from '../research-menu-panel/research-menu-panel.component';
import { BalancingMenuPanelComponent } from '../balancing-menu-panel/balancing-menu-panel.component';
import { CorrespondenceMenuPanelComponent } from '../correspondence-menu-panel/correspondence-menu-panel.component';
import { QualityAssuranceMenuPanelComponent } from '../quality-assurance-menu-panel/quality-assurance-menu-panel.component';
import { AdministrationMenuPanelComponent } from '../administration-menu-panel/administration-menu-panel.component';
import { SearchReportsMenuPanelComponent } from '../search-reports-menu-panel/search-reports-menu-panel.component';
import { MenuComponent } from '../menu/menu.component';

@Component({
  selector: 'header',
  standalone: true,
  imports: [
    NavbarComponent,
    MenuItemComponent,
    DataEntryMenuPanelComponent,
    DashboardMenuPanelComponent,
    ResearchMenuPanelComponent,
    BalancingMenuPanelComponent,
    CorrespondenceMenuPanelComponent,
    QualityAssuranceMenuPanelComponent,
    AdministrationMenuPanelComponent,
    SearchReportsMenuPanelComponent,
    MenuComponent
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeaderComponent {

}
