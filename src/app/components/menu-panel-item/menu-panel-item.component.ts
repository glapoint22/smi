import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'menu-panel-item',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './menu-panel-item.component.html',
  styleUrl: './menu-panel-item.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MenuPanelItemComponent {
  public url = input<string>();
}