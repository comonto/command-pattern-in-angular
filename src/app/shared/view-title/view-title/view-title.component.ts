import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { RouterLink } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { NgIf } from '@angular/common';

@Component({
    selector: 'app-view-title',
    templateUrl: './view-title.component.html',
    styleUrls: ['./view-title.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    standalone: true,
    imports: [NgIf, MatButtonModule, RouterLink, MatIconModule]
})
export class ViewTitleComponent {
  @Input() viewTitle: string;
  @Input() subtitle: string;
  @Input() hasBackButton: boolean;
}
