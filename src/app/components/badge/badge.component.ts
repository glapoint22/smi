import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'badge',
  standalone: true,
  imports: [],
  templateUrl: './badge.component.html',
  styleUrl: './badge.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BadgeComponent {

}
