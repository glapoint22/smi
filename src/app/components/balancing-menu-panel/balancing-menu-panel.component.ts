import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MenuPanelComponent } from '../menu-panel/menu-panel.component';
import { MenuPanelHeaderComponent } from '../menu-panel-header/menu-panel-header.component';
import { MenuPanelItemComponent } from '../menu-panel-item/menu-panel-item.component';

@Component({
  selector: 'balancing-menu-panel',
  standalone: true,
  imports: [
    MenuPanelComponent,
    MenuPanelHeaderComponent,
    MenuPanelItemComponent
  ],
  templateUrl: './balancing-menu-panel.component.html',
  styleUrl: './balancing-menu-panel.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BalancingMenuPanelComponent {

}
