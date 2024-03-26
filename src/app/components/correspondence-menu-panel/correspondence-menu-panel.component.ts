import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MenuPanelComponent } from '../menu-panel/menu-panel.component';
import { MenuPanelHeaderComponent } from '../menu-panel-header/menu-panel-header.component';
import { MenuPanelItemComponent } from '../menu-panel-item/menu-panel-item.component';

@Component({
  selector: 'correspondence-menu-panel',
  standalone: true,
  imports: [
    MenuPanelComponent,
    MenuPanelHeaderComponent,
    MenuPanelItemComponent
  ],
  templateUrl: './correspondence-menu-panel.component.html',
  styleUrl: './correspondence-menu-panel.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CorrespondenceMenuPanelComponent {

}
