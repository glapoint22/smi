import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MenuPanelComponent } from '../menu-panel/menu-panel.component';
import { MenuPanelHeaderComponent } from '../menu-panel-header/menu-panel-header.component';

@Component({
  selector: 'research-menu-panel',
  standalone: true,
  imports: [
    MenuPanelComponent,
    MenuPanelHeaderComponent
  ],
  templateUrl: './research-menu-panel.component.html',
  styleUrl: './research-menu-panel.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ResearchMenuPanelComponent {

}
