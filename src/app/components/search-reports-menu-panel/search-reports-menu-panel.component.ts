import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MenuPanelComponent } from '../menu-panel/menu-panel.component';
import { MenuPanelHeaderComponent } from '../menu-panel-header/menu-panel-header.component';
import { MenuPanelItemComponent } from '../menu-panel-item/menu-panel-item.component';

@Component({
  selector: 'search-reports-menu-panel',
  standalone: true,
  imports: [
    MenuPanelComponent,
    MenuPanelHeaderComponent,
    MenuPanelItemComponent
  ],
  templateUrl: './search-reports-menu-panel.component.html',
  styleUrl: './search-reports-menu-panel.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SearchReportsMenuPanelComponent {

}
