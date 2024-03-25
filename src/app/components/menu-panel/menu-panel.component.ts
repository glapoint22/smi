import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'menu-panel',
  standalone: true,
  imports: [],
  templateUrl: './menu-panel.component.html',
  styleUrl: './menu-panel.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MenuPanelComponent {

}
