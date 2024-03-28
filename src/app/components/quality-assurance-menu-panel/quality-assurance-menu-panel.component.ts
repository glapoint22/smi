import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MenuPanelComponent } from '../menu-panel/menu-panel.component';
import { MenuPanelHeaderComponent } from '../menu-panel-header/menu-panel-header.component';
import { MenuPanelItemComponent } from '../menu-panel-item/menu-panel-item.component';
import { BadgeComponent } from '../badge/badge.component';
import { MenuPanelSectionComponent } from '../menu-panel-section/menu-panel-section.component';

@Component({
  selector: 'quality-assurance-menu-panel',
  standalone: true,
  imports: [
    MenuPanelComponent,
    MenuPanelHeaderComponent,
    MenuPanelItemComponent,
    BadgeComponent,
    MenuPanelSectionComponent
  ],
  templateUrl: './quality-assurance-menu-panel.component.html',
  styleUrl: './quality-assurance-menu-panel.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class QualityAssuranceMenuPanelComponent {

}
