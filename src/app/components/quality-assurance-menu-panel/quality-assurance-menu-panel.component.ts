import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MenuPanelComponent } from '../menu-panel/menu-panel.component';
import { MenuPanelHeaderComponent } from '../menu-panel-header/menu-panel-header.component';

@Component({
  selector: 'quality-assurance-menu-panel',
  standalone: true,
  imports: [
    MenuPanelComponent,
    MenuPanelHeaderComponent
  ],
  templateUrl: './quality-assurance-menu-panel.component.html',
  styleUrl: './quality-assurance-menu-panel.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class QualityAssuranceMenuPanelComponent {

}
