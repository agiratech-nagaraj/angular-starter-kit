import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { CustomIconsService } from '@app/core/services';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LayoutComponent implements OnInit {
  fillerNav = Array.from({ length: 5 }, (_, i) => `Nav Item ${i + 1}`);
  menuOpened = false;
  constructor(private customIconService: CustomIconsService) {}

  ngOnInit(): void {}
}
