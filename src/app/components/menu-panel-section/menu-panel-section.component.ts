import { ChangeDetectionStrategy, Component, input } from '@angular/core';

@Component({
  selector: 'menu-panel-section',
  standalone: true,
  imports: [],
  templateUrl: './menu-panel-section.component.html',
  styleUrl: './menu-panel-section.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MenuPanelSectionComponent {
  public name = input<string>();
}