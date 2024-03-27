import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MenuPanelComponent } from '../menu-panel/menu-panel.component';
import { MenuPanelHeaderComponent } from '../menu-panel-header/menu-panel-header.component';
import { MenuPanelItemComponent } from '../menu-panel-item/menu-panel-item.component';
import { BadgeComponent } from '../badge/badge.component';

@Component({
  selector: 'research-menu-panel',
  standalone: true,
  imports: [
    MenuPanelComponent,
    MenuPanelHeaderComponent,
    MenuPanelItemComponent,
    BadgeComponent
  ],
  templateUrl: './research-menu-panel.component.html',
  styleUrl: './research-menu-panel.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ResearchMenuPanelComponent {

}
